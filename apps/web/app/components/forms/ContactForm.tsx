"use client";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "~/components/primitives/Button";
import { cn } from "~/lib/cn";
import { easeApple } from "~/lib/motion";
import { supabase } from "~/lib/supabase";
import type { KontaktPageContent } from "~/content/pages/kontakt";

type ContactFormProps = {
  content: KontaktPageContent["form"];
  defaultIntent?: string;
  onSuccess?: () => void;
};

export function ContactForm({ content, defaultIntent, onSuccess }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        firstName: z.string().min(1, content.errors.firstNameRequired),
        lastName: z.string().min(1, content.errors.lastNameRequired),
        dob: z.string().min(1, content.errors.dobRequired),
        email: z
          .string()
          .min(1, content.errors.emailRequired)
          .email(content.errors.emailInvalid),
        phone: z.string().optional(),
        intent: z.string().min(1),
        message: z.string().min(1, content.errors.messageRequired),
        document: z.any().optional(),
        consent: z.literal(true, {
          errorMap: () => ({ message: content.errors.consentRequired }),
        }),
      }),
    [content.errors],
  );
  type FormValues = z.infer<typeof schema>;

  const initialIntent =
    content.intents.find((i) => i.value === defaultIntent)?.value ??
    content.intents[0].value;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      intent: initialIntent,
      message: "",
      document: undefined,
      consent: false as unknown as true,
    },
    mode: "onTouched",
  });

  // Reset to the new locale's defaults if content swaps under us.
  useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      intent: initialIntent,
      message: "",
      document: undefined,
      consent: false as unknown as true,
    });
  }, [content, initialIntent, reset]);

  const onSubmit = handleSubmit(async (values) => {
    if (!supabase) return;

    let documentPath: string | null = null;
    const file: File | undefined = values.document?.[0];
    if (file) {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      await supabase.storage.from("contact-documents").upload(path, file);
      documentPath = path;
    }

    await supabase.from("contact_submissions").insert({
      first_name: values.firstName,
      last_name: values.lastName,
      dob: values.dob,
      email: values.email,
      phone: values.phone || null,
      intent: values.intent,
      message: values.message,
      document_path: documentPath,
    });
    setSubmitted(true);
    onSuccess?.();
  });

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

            {/* Intent — kept as a hidden value; only one intent is offered. */}
            <input type="hidden" {...register("intent")} />

            <div className="grid gap-8 md:grid-cols-2">
              <Field
                label={content.fields.firstName}
                error={errors.firstName?.message}
                htmlFor="cf-first-name"
              >
                <input
                  id="cf-first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder={content.fields.firstNamePlaceholder}
                  {...register("firstName")}
                  className={inputClass(!!errors.firstName)}
                />
              </Field>

              <Field
                label={content.fields.lastName}
                error={errors.lastName?.message}
                htmlFor="cf-last-name"
              >
                <input
                  id="cf-last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder={content.fields.lastNamePlaceholder}
                  {...register("lastName")}
                  className={inputClass(!!errors.lastName)}
                />
              </Field>
            </div>

            <Field
              label={content.fields.dob}
              error={errors.dob?.message}
              htmlFor="cf-dob"
            >
              <input
                id="cf-dob"
                type="date"
                autoComplete="bday"
                {...register("dob")}
                className={inputClass(!!errors.dob)}
              />
            </Field>

            <div className="grid gap-8 md:grid-cols-2">
              <Field
                label={content.fields.email}
                error={errors.email?.message}
                htmlFor="cf-email"
              >
                <input
                  id="cf-email"
                  type="email"
                  autoComplete="email"
                  placeholder={content.fields.emailPlaceholder}
                  {...register("email")}
                  className={inputClass(!!errors.email)}
                />
              </Field>

              <Field
                label={`${content.fields.phone} ${content.fields.phoneOptional}`}
                htmlFor="cf-phone"
              >
                <input
                  id="cf-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={content.fields.phonePlaceholder}
                  {...register("phone")}
                  className={inputClass(false)}
                />
              </Field>
            </div>

            <Field
              label={content.fields.message}
              error={errors.message?.message}
              htmlFor="cf-message"
            >
              <textarea
                id="cf-message"
                rows={5}
                placeholder={content.fields.messagePlaceholder}
                {...register("message")}
                className={cn(
                  inputClass(!!errors.message),
                  "min-h-[8rem] resize-y",
                )}
              />
            </Field>

            <Field
              label={`${content.fields.document} ${content.fields.documentOptional}`}
              htmlFor="cf-document"
            >
              <input
                id="cf-document"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                {...register("document")}
                className="text-body-md text-ink file:rounded-pill file:border-hairline file:bg-canvas file:text-ink hover:file:bg-muted block w-full file:mr-4 file:cursor-pointer file:border file:px-4 file:py-2"
              />
              <p className="text-caption text-ink-subtle mt-2">
                {content.fields.documentHint}
              </p>
            </Field>

            <div>
              <label className="text-body-md text-ink-muted flex items-start gap-3">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-1.5 size-4 shrink-0"
                />
                <span>{content.fields.consent}</span>
              </label>
              {errors.consent && (
                <p className="text-caption mt-2 ml-7 text-red-600">
                  {errors.consent.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-caption text-ink-subtle max-w-[42ch]">
                {content.privacy}
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
