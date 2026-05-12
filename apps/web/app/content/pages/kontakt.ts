/*
 * Contact page content — DE + EN.
 *
 * Three sections:
 *   - hero: invitation to get in touch
 *   - channels: phone, email, hours, in-person hint
 *   - form: a single form with an "intent" selector that doubles as
 *     the deep-link target (#hausbesuch / #rezept). The form is
 *     intentionally minimal: name, email, phone (optional), intent,
 *     message. Privacy note below the submit.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const intentSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const kontaktPageSchema = z.object({
  meta: z.object({ title: z.string(), description: z.string() }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    lede: z.string(),
  }),
  channels: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z
      .array(
        z.object({
          icon: z.string(),
          label: z.string(),
          value: z.string(),
          href: z.string().optional(),
          cta: z
            .object({
              label: z.string(),
              href: z.string(),
            })
            .optional(),
        }),
      )
      .min(3),
  }),
  form: z.object({
    eyebrow: z.string(),
    title: z.string(),
    lede: z.string(),
    fields: z.object({
      formHeading: z.string(),
      firstName: z.string(),
      firstNamePlaceholder: z.string(),
      lastName: z.string(),
      lastNamePlaceholder: z.string(),
      dob: z.string(),
      email: z.string(),
      emailPlaceholder: z.string(),
      phone: z.string(),
      phonePlaceholder: z.string(),
      phoneOptional: z.string(),
      intent: z.string(),
      message: z.string(),
      messagePlaceholder: z.string(),
      document: z.string(),
      documentHint: z.string(),
      documentOptional: z.string(),
      consent: z.string(),
      submit: z.string(),
      submitting: z.string(),
    }),
    intents: z.array(intentSchema).min(1),
    success: z.object({
      title: z.string(),
      body: z.string(),
    }),
    errors: z.object({
      firstNameRequired: z.string(),
      lastNameRequired: z.string(),
      dobRequired: z.string(),
      emailRequired: z.string(),
      emailInvalid: z.string(),
      messageRequired: z.string(),
      consentRequired: z.string(),
      generic: z.string(),
    }),
    privacy: z.string(),
  }),
});
export type KontaktPageContent = z.infer<typeof kontaktPageSchema>;

const de: KontaktPageContent = {
  meta: {
    title: "Kontakt — Sanimotion",
    description:
      "Sprechen Sie mit uns: Termin buchen, Rezept hochladen oder Hausbesuch anfragen. Telefon, E-Mail und ein direktes Kontaktformular.",
  },
  hero: {
    eyebrow: "Kontakt",
    titleLead: "Sprechen Sie",
    titleTail: "mit uns.",
    lede: "Termin buchen, Rezept hochladen oder Hausbesuch anfragen — schreiben Sie uns hier oder rufen Sie an. Wir melden uns innerhalb eines Werktags zurück.",
  },
  channels: {
    eyebrow: "Direkt erreichen",
    title: "Drei Wege zu uns.",
    items: [
      {
        icon: "Phone",
        label: "Telefon",
        value: "030 235 957 600",
        href: "tel:+493023595760",
      },
      {
        icon: "Mail",
        label: "E-Mail",
        value: "info@sanimotion.com",
        href: "mailto:info@sanimotion.com",
      },
      {
        icon: "Clock",
        label: "Öffnungszeiten",
        value: "Mo. – Fr. · 09:00 – 15:00 Uhr",
        cta: {
          label: "Standorte ansehen",
          href: "/standorte",
        },
      },
    ],
  },
  form: {
    eyebrow: "Nachricht",
    title: "Schreiben Sie uns.",
    lede: "Wählen Sie Ihr Anliegen — wir melden uns mit dem passenden Ansprechpartner zurück.",
    fields: {
      formHeading: "Rezept einreichen",
      firstName: "Vorname",
      firstNamePlaceholder: "Vorname",
      lastName: "Nachname",
      lastNamePlaceholder: "Nachname",
      dob: "Geburtsdatum",
      email: "E-Mail",
      emailPlaceholder: "name@beispiel.de",
      phone: "Telefon",
      phonePlaceholder: "030 …",
      phoneOptional: "(optional)",
      intent: "Anliegen",
      message: "Nachricht",
      messagePlaceholder: "Worum geht es?",
      document: "Dokument hochladen",
      documentHint: "PDF, JPG oder PNG · max. 10 MB",
      documentOptional: "(optional)",
      consent:
        "Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden.",
      submit: "Nachricht senden",
      submitting: "Wird gesendet…",
    },
    intents: [{ value: "rezept", label: "Rezept einlösen" }],
    success: {
      title: "Vielen Dank — Ihre Nachricht ist bei uns.",
      body: "Wir melden uns innerhalb eines Werktags zurück. Bei dringenden Anliegen erreichen Sie uns telefonisch unter 030 235 957 600.",
    },
    errors: {
      firstNameRequired: "Bitte geben Sie Ihren Vornamen an.",
      lastNameRequired: "Bitte geben Sie Ihren Nachnamen an.",
      dobRequired: "Bitte geben Sie Ihr Geburtsdatum an.",
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse an.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      messageRequired: "Bitte schreiben Sie uns eine kurze Nachricht.",
      consentRequired: "Bitte bestätigen Sie die Einwilligung.",
      generic: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },
    privacy:
      "Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Details in unserer Datenschutzerklärung.",
  },
};

const en: KontaktPageContent = {
  meta: {
    title: "Contact — Sanimotion",
    description:
      "Talk to us: book an appointment, upload a prescription, or request a home visit. Phone, email, and a direct contact form.",
  },
  hero: {
    eyebrow: "Contact",
    titleLead: "Talk to us.",
    titleTail: "We're listening.",
    lede: "Book an appointment, upload a prescription, or request a home visit — write to us here or give us a call. We respond within one business day.",
  },
  channels: {
    eyebrow: "Reach us directly",
    title: "Three ways to get in touch.",
    items: [
      {
        icon: "Phone",
        label: "Phone",
        value: "030 235 957 600",
        href: "tel:+493023595760",
      },
      {
        icon: "Mail",
        label: "Email",
        value: "info@sanimotion.com",
        href: "mailto:info@sanimotion.com",
      },
      {
        icon: "Clock",
        label: "Opening hours",
        value: "Mon – Fri · 9:00 – 15:00",
        cta: {
          label: "View locations",
          href: "/standorte",
        },
      },
    ],
  },
  form: {
    eyebrow: "Message",
    title: "Write to us.",
    lede: "Pick the topic that fits best — the right person on our team will get back to you.",
    fields: {
      formHeading: "Submit a prescription",
      firstName: "First name",
      firstNamePlaceholder: "First name",
      lastName: "Last name",
      lastNamePlaceholder: "Last name",
      dob: "Date of birth",
      email: "Email",
      emailPlaceholder: "name@example.com",
      phone: "Phone",
      phonePlaceholder: "+49 …",
      phoneOptional: "(optional)",
      intent: "Topic",
      message: "Message",
      messagePlaceholder: "What's it about?",
      document: "Upload document",
      documentHint: "PDF, JPG or PNG · max. 10 MB",
      documentOptional: "(optional)",
      consent:
        "I agree to my data being processed for the purpose of handling my request.",
      submit: "Send message",
      submitting: "Sending…",
    },
    intents: [{ value: "rezept", label: "Submit a prescription" }],
    success: {
      title: "Thank you — your message is with us.",
      body: "We'll respond within one business day. For urgent matters, please call 030 235 957 600.",
    },
    errors: {
      firstNameRequired: "Please enter your first name.",
      lastNameRequired: "Please enter your last name.",
      dobRequired: "Please enter your date of birth.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Please write us a short message.",
      consentRequired: "Please confirm your consent.",
      generic: "Something went wrong. Please try again.",
    },
    privacy:
      "Your data will be used only to handle your request. Details in our privacy policy.",
  },
};

const pages: Record<Locale, KontaktPageContent> = {
  de: kontaktPageSchema.parse(de),
  en: kontaktPageSchema.parse(en),
};

export const getKontaktContent = (locale: Locale): KontaktPageContent =>
  pages[locale];
