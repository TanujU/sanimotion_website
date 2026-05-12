/*
 * AuthForm — shared form for /anmelden and /registrieren.
 *
 * react-hook-form + zod. `mode="login"` renders email + password;
 * `mode="register"` adds first/last name and a password-confirm field
 * and creates the user via Supabase.
 *
 * Validation messages come from the locale's content module so error
 * copy stays localized.
 */
"use client";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "~/components/primitives/Button";
import { SmartLink } from "~/components/primitives/SmartLink";
import { cn } from "~/lib/cn";
import { easeApple } from "~/lib/motion";
import { supabase, isSupabaseConfigured } from "~/lib/supabase";
import { findPatient } from "~/lib/patients";
import type { AuthPageContent } from "~/content/pages/auth";

type AuthFormProps = {
  mode: "login" | "register";
  content: AuthPageContent;
};

export function AuthForm({ mode, content }: AuthFormProps) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [topError, setTopError] = useState<string | null>(null);

  const schema = useMemo(() => {
    const base = {
      email: z
        .string()
        .min(1, content.errors.emailRequired)
        .email(content.errors.emailInvalid),
      password: z
        .string()
        .min(1, content.errors.passwordRequired)
        .min(8, content.errors.passwordMin),
    };

    if (mode === "login") return z.object(base);

    return z
      .object({
        ...base,
        firstName: z.string().min(1, content.errors.firstNameRequired),
        lastName: z.string().min(1, content.errors.lastNameRequired),
        dob: z.string().min(1, content.errors.dobRequired),
        passwordConfirm: z.string().min(1, content.errors.passwordRequired),
      })
      .refine((data) => data.password === data.passwordConfirm, {
        path: ["passwordConfirm"],
        message: content.errors.passwordMismatch,
      });
  }, [mode, content.errors]);

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues:
      mode === "login"
        ? ({ email: "", password: "" } as FormValues)
        : ({
            firstName: "",
            lastName: "",
            dob: "",
            email: "",
            password: "",
            passwordConfirm: "",
          } as FormValues),
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(async (values) => {
    setTopError(null);

    if (!isSupabaseConfigured() || !supabase) {
      setTopError(content.errors.notConfigured);
      return;
    }

    if (mode === "login") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setTopError(error.message || content.errors.generic);
        return;
      }

      // Gate access on app_memberships — only users seeded by the
      // patient signup trigger have a row for 'sanimotion_kunden'.
      const userId = data.user?.id;
      if (userId) {
        const { data: mem } = await supabase
          .from("app_memberships")
          .select("app_key")
          .eq("user_id", userId)
          .eq("app_key", "sanimotion_kunden")
          .maybeSingle();
        if (!mem) {
          setTopError(content.errors.noAccess);
          return;
        }
      }

      // Best-effort auf_id backfill — the in-site dashboard doesn't need
      // it to render, but downstream queries (Sani_grouped lookups) do.
      // If user_metadata.auf_id is missing, retry the Sani_grouped match
      // using first/last/dob (data may have been added since signup) and
      // persist whatever we find onto the user.
      const meta = (data.user?.user_metadata ?? {}) as Record<string, unknown>;
      const aufId = (meta.auf_id as string | undefined) ?? null;

      if (!aufId) {
        const first = (meta.first_name as string | undefined) ?? "";
        const last = (meta.last_name as string | undefined) ?? "";
        const dob = (meta.dob as string | undefined) ?? "";
        if (first && last && dob) {
          const match = await findPatient({
            firstName: first,
            lastName: last,
            dob,
          });
          if (match) {
            await supabase.auth.updateUser({
              data: {
                auf_id: match.aufId,
                sani_grouped_id: match.saniGroupedId,
              },
            });
          }
        }
      }

      setSubmitted(true);
      setTimeout(() => {
        navigate("/mein-bereich");
      }, 600);
      return;
    }

    const v = values as Extract<FormValues, { firstName: string }>;

    // Try to match an existing patient record before creating the auth
    // user — if we get a hit, the auf_id is stashed in user_metadata so
    // the very first login redirects straight to the dashboard.
    const match = await findPatient({
      firstName: v.firstName,
      lastName: v.lastName,
      dob: v.dob,
    });

    const { data, error } = await supabase.auth.signUp({
      email: v.email,
      password: v.password,
      options: {
        data: {
          // Trigger contract (handle_new_patient_user): app_key gates the
          // insert into patient_profiles + app_memberships; vorname /
          // nachname / geburtsdatum / auf_id are the columns it reads.
          app_key: "sanimotion_kunden",
          vorname: v.firstName,
          nachname: v.lastName,
          geburtsdatum: v.dob,
          // Kept for the dashboard-redirect path on login.
          first_name: v.firstName,
          last_name: v.lastName,
          full_name: `${v.firstName} ${v.lastName}`.trim(),
          dob: v.dob,
          auf_id: match?.aufId ?? null,
          sani_grouped_id: match?.saniGroupedId ?? null,
        },
      },
    });
    if (error) {
      setTopError(error.message || content.errors.generic);
      return;
    }
    setSubmitted(true);
    // When Supabase "Confirm email" is off, signUp returns a session and
    // the user is logged in immediately — send them straight to the
    // dashboard. Otherwise stay on the success screen (the success copy
    // tells them to check their inbox).
    if (data.session) {
      setTimeout(() => {
        navigate("/mein-bereich");
      }, 600);
    }
  });

  // Type-narrow access to register-only fields.
  const registerErrors = errors as Record<
    "firstName" | "lastName" | "dob" | "passwordConfirm",
    { message?: string } | undefined
  >;

  return (
    <div className="border-hairline bg-surface rounded-card border p-8 lg:p-12">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeApple }}
            className="py-8 text-center"
          >
            <div className="bg-ink text-canvas mx-auto inline-flex size-12 items-center justify-center rounded-full">
              <Check size={20} aria-hidden />
            </div>
            <h3 className="text-display-md text-ink mt-6 font-semibold tracking-tight">
              {content.success.title}
            </h3>
            <p className="text-body-lg text-ink-muted mx-auto mt-4 max-w-[44ch]">
              {content.success.body}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: easeApple }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-8"
          >
            <h3 className="text-heading-lg text-ink font-semibold tracking-tight">
              {content.fields.formHeading}
            </h3>

            {topError && (
              <div
                role="alert"
                className="rounded-md border border-red-500/40 bg-red-500/5 px-4 py-3"
              >
                <p className="text-body-md text-red-600">{topError}</p>
              </div>
            )}

            {mode === "register" && (
              <div className="grid gap-8 md:grid-cols-2">
                <Field
                  label={content.fields.firstName}
                  error={registerErrors.firstName?.message}
                  htmlFor="af-first-name"
                >
                  <input
                    id="af-first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder={content.fields.firstNamePlaceholder}
                    {...register("firstName" as never)}
                    className={inputClass(!!registerErrors.firstName)}
                  />
                </Field>

                <Field
                  label={content.fields.lastName}
                  error={registerErrors.lastName?.message}
                  htmlFor="af-last-name"
                >
                  <input
                    id="af-last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder={content.fields.lastNamePlaceholder}
                    {...register("lastName" as never)}
                    className={inputClass(!!registerErrors.lastName)}
                  />
                </Field>
              </div>
            )}

            {mode === "register" && (
              <Field
                label={content.fields.dob}
                error={registerErrors.dob?.message}
                htmlFor="af-dob"
              >
                <input
                  id="af-dob"
                  type="date"
                  autoComplete="bday"
                  {...register("dob" as never)}
                  className={inputClass(!!registerErrors.dob)}
                />
                {content.fields.dobHint && (
                  <p className="text-caption text-ink-subtle mt-2">
                    {content.fields.dobHint}
                  </p>
                )}
              </Field>
            )}

            <Field
              label={content.fields.email}
              error={errors.email?.message as string | undefined}
              htmlFor="af-email"
            >
              <input
                id="af-email"
                type="email"
                autoComplete="email"
                placeholder={content.fields.emailPlaceholder}
                {...register("email")}
                className={inputClass(!!errors.email)}
              />
            </Field>

            <Field
              label={content.fields.password}
              error={errors.password?.message as string | undefined}
              htmlFor="af-password"
            >
              <input
                id="af-password"
                type="password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                placeholder={content.fields.passwordPlaceholder}
                {...register("password")}
                className={inputClass(!!errors.password)}
              />
            </Field>

            {mode === "register" && (
              <Field
                label={content.fields.passwordConfirm}
                error={registerErrors.passwordConfirm?.message}
                htmlFor="af-password-confirm"
              >
                <input
                  id="af-password-confirm"
                  type="password"
                  autoComplete="new-password"
                  placeholder={content.fields.passwordConfirmPlaceholder}
                  {...register("passwordConfirm" as never)}
                  className={inputClass(!!registerErrors.passwordConfirm)}
                />
              </Field>
            )}

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-caption text-ink-subtle">
                {content.switch.prompt}{" "}
                <SmartLink
                  href={content.switch.href}
                  className="text-ink underline-offset-4 hover:underline"
                >
                  {content.switch.linkLabel}
                </SmartLink>
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting
                  ? content.fields.submitting
                  : content.fields.submit}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function inputClass(hasError: boolean): string {
  return cn(
    "w-full rounded-md border bg-canvas px-4 py-3 text-body-md text-ink placeholder:text-ink-subtle",
    "outline-none transition-colors duration-fast",
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-hairline focus:border-ink",
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-caption text-ink-subtle block font-mono tracking-widest uppercase"
      >
        {label}
      </label>
      <div className="mt-3">{children}</div>
      {error && <p className="text-caption mt-2 text-red-600">{error}</p>}
    </div>
  );
}
