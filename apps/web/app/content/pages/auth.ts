/*
 * Auth pages content — sign-in (/anmelden) and registration (/registrieren).
 *
 * Two locales. Form labels, placeholders, validation messages and Supabase
 * error fallbacks live here so the routes themselves stay layout-only.
 */
import type { Locale } from "~/i18n/locale";

export type AuthPageContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleTail: string;
    lede: string;
  };
  fields: {
    formHeading: string;
    firstName: string;
    firstNamePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    dob: string;
    dobHint: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    passwordConfirm: string;
    passwordConfirmPlaceholder: string;
    submit: string;
    submitting: string;
  };
  errors: {
    firstNameRequired: string;
    lastNameRequired: string;
    dobRequired: string;
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    passwordMin: string;
    passwordMismatch: string;
    notConfigured: string;
    noAccess: string;
    generic: string;
  };
  success: { title: string; body: string };
  switch: { prompt: string; linkLabel: string; href: string };
};

export type LoginPageContent = AuthPageContent;
export type RegisterPageContent = AuthPageContent;

const deLogin: LoginPageContent = {
  meta: {
    title: "Anmelden — Sanimotion",
    description:
      "Melden Sie sich in Ihrem Sanimotion-Konto an, um Termine, Bestellungen und Rezepte zu verwalten.",
  },
  hero: {
    eyebrow: "Konto",
    titleLead: "Willkommen",
    titleTail: "zurück.",
    lede: "Melden Sie sich mit Ihrer E-Mail-Adresse an, um auf Ihr Sanimotion-Konto zuzugreifen.",
  },
  fields: {
    formHeading: "Anmeldedaten",
    firstName: "",
    firstNamePlaceholder: "",
    lastName: "",
    lastNamePlaceholder: "",
    dob: "",
    dobHint: "",
    email: "E-Mail",
    emailPlaceholder: "name@example.com",
    password: "Passwort",
    passwordPlaceholder: "Ihr Passwort",
    passwordConfirm: "",
    passwordConfirmPlaceholder: "",
    submit: "Anmelden",
    submitting: "Wird angemeldet…",
  },
  errors: {
    firstNameRequired: "",
    lastNameRequired: "",
    dobRequired: "",
    emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse an.",
    emailInvalid: "Diese E-Mail-Adresse ist ungültig.",
    passwordRequired: "Bitte geben Sie Ihr Passwort an.",
    passwordMin: "Das Passwort muss mindestens 8 Zeichen lang sein.",
    passwordMismatch: "",
    notConfigured:
      "Anmeldung derzeit nicht verfügbar. Bitte kontaktieren Sie uns.",
    noAccess:
      "Für dieses Konto ist kein Patientenzugang freigeschaltet. Bitte kontaktieren Sie uns.",
    generic: "Anmeldung fehlgeschlagen. Bitte prüfen Sie Ihre Eingaben.",
  },
  success: {
    title: "Erfolgreich angemeldet.",
    body: "Sie werden zu Ihrem Konto weitergeleitet.",
  },
  switch: {
    prompt: "Noch kein Konto?",
    linkLabel: "Jetzt registrieren",
    href: "/registrieren",
  },
};

const enLogin: LoginPageContent = {
  meta: {
    title: "Sign in — Sanimotion",
    description:
      "Sign in to your Sanimotion account to manage appointments, orders and prescriptions.",
  },
  hero: {
    eyebrow: "Account",
    titleLead: "Welcome",
    titleTail: "back.",
    lede: "Sign in with your email address to access your Sanimotion account.",
  },
  fields: {
    formHeading: "Sign-in details",
    firstName: "",
    firstNamePlaceholder: "",
    lastName: "",
    lastNamePlaceholder: "",
    dob: "",
    dobHint: "",
    email: "Email",
    emailPlaceholder: "name@example.com",
    password: "Password",
    passwordPlaceholder: "Your password",
    passwordConfirm: "",
    passwordConfirmPlaceholder: "",
    submit: "Sign in",
    submitting: "Signing in…",
  },
  errors: {
    firstNameRequired: "",
    lastNameRequired: "",
    dobRequired: "",
    emailRequired: "Please enter your email address.",
    emailInvalid: "That email address is not valid.",
    passwordRequired: "Please enter your password.",
    passwordMin: "Password must be at least 8 characters.",
    passwordMismatch: "",
    notConfigured: "Sign-in is currently unavailable. Please contact us.",
    noAccess:
      "This account doesn't have patient access enabled. Please contact us.",
    generic: "Sign-in failed. Please check your details.",
  },
  success: {
    title: "Signed in.",
    body: "Taking you to your account.",
  },
  switch: {
    prompt: "Don't have an account?",
    linkLabel: "Register now",
    href: "/registrieren",
  },
};

const deRegister: RegisterPageContent = {
  meta: {
    title: "Registrieren — Sanimotion",
    description:
      "Erstellen Sie ein Sanimotion-Konto, um Termine, Rezepte und Bestellungen einfacher zu verwalten.",
  },
  hero: {
    eyebrow: "Konto erstellen",
    titleLead: "Ein Konto",
    titleTail: "für alles.",
    lede: "Mit einem Sanimotion-Konto buchen Sie Termine schneller und behalten Ihre Versorgung im Blick.",
  },
  fields: {
    formHeading: "Ihre Angaben",
    firstName: "Vorname",
    firstNamePlaceholder: "Anna",
    lastName: "Nachname",
    lastNamePlaceholder: "Müller",
    dob: "Geburtsdatum",
    dobHint: "Wir gleichen Ihre Versorgung anhand von Name und Geburtsdatum ab.",
    email: "E-Mail",
    emailPlaceholder: "name@example.com",
    password: "Passwort",
    passwordPlaceholder: "Mindestens 8 Zeichen",
    passwordConfirm: "Passwort bestätigen",
    passwordConfirmPlaceholder: "Passwort erneut eingeben",
    submit: "Konto erstellen",
    submitting: "Konto wird erstellt…",
  },
  errors: {
    firstNameRequired: "Bitte geben Sie Ihren Vornamen an.",
    lastNameRequired: "Bitte geben Sie Ihren Nachnamen an.",
    dobRequired: "Bitte geben Sie Ihr Geburtsdatum an.",
    emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse an.",
    emailInvalid: "Diese E-Mail-Adresse ist ungültig.",
    passwordRequired: "Bitte wählen Sie ein Passwort.",
    passwordMin: "Das Passwort muss mindestens 8 Zeichen lang sein.",
    passwordMismatch: "Die Passwörter stimmen nicht überein.",
    notConfigured:
      "Registrierung derzeit nicht verfügbar. Bitte kontaktieren Sie uns.",
    noAccess:
      "Für dieses Konto ist kein Patientenzugang freigeschaltet. Bitte kontaktieren Sie uns.",
    generic:
      "Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.",
  },
  success: {
    title: "Fast geschafft.",
    body: "Wir haben Ihnen eine Bestätigungs-E-Mail geschickt. Bitte klicken Sie auf den Link, um Ihr Konto zu aktivieren.",
  },
  switch: {
    prompt: "Sie haben bereits ein Konto?",
    linkLabel: "Jetzt anmelden",
    href: "/anmelden",
  },
};

const enRegister: RegisterPageContent = {
  meta: {
    title: "Register — Sanimotion",
    description:
      "Create a Sanimotion account to manage appointments, prescriptions and orders more easily.",
  },
  hero: {
    eyebrow: "Create account",
    titleLead: "One account",
    titleTail: "for everything.",
    lede: "With a Sanimotion account you can book faster and keep an eye on your care.",
  },
  fields: {
    formHeading: "Your details",
    firstName: "First name",
    firstNamePlaceholder: "Anna",
    lastName: "Last name",
    lastNamePlaceholder: "Müller",
    dob: "Date of birth",
    dobHint: "We use your name and date of birth to find your existing records.",
    email: "Email",
    emailPlaceholder: "name@example.com",
    password: "Password",
    passwordPlaceholder: "At least 8 characters",
    passwordConfirm: "Confirm password",
    passwordConfirmPlaceholder: "Re-enter your password",
    submit: "Create account",
    submitting: "Creating account…",
  },
  errors: {
    firstNameRequired: "Please enter your first name.",
    lastNameRequired: "Please enter your last name.",
    dobRequired: "Please enter your date of birth.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "That email address is not valid.",
    passwordRequired: "Please choose a password.",
    passwordMin: "Password must be at least 8 characters.",
    passwordMismatch: "Passwords don't match.",
    notConfigured:
      "Registration is currently unavailable. Please contact us.",
    noAccess:
      "This account doesn't have patient access enabled. Please contact us.",
    generic: "Registration failed. Please try again.",
  },
  success: {
    title: "Almost there.",
    body: "We've sent you a confirmation email. Click the link inside to activate your account.",
  },
  switch: {
    prompt: "Already have an account?",
    linkLabel: "Sign in",
    href: "/anmelden",
  },
};

const loginByLocale: Record<Locale, LoginPageContent> = {
  de: deLogin,
  en: enLogin,
};

const registerByLocale: Record<Locale, RegisterPageContent> = {
  de: deRegister,
  en: enRegister,
};

export const getLoginContent = (locale: Locale): LoginPageContent =>
  loginByLocale[locale];

export const getRegisterContent = (locale: Locale): RegisterPageContent =>
  registerByLocale[locale];

export type NavAccountStrings = {
  signedOutLabel: string;
  signedInLabel: (firstName: string) => string;
  signOut: string;
  myAccount: string;
};

const navAccountByLocale: Record<Locale, NavAccountStrings> = {
  de: {
    signedOutLabel: "Anmelden",
    signedInLabel: (name) => name || "Mein Konto",
    signOut: "Abmelden",
    myAccount: "Mein Konto",
  },
  en: {
    signedOutLabel: "Sign in",
    signedInLabel: (name) => name || "Account",
    signOut: "Sign out",
    myAccount: "My account",
  },
};

export const getNavAccountStrings = (locale: Locale): NavAccountStrings =>
  navAccountByLocale[locale];
