import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router'
import { supabase as supabaseNullable } from '~/lib/supabase'
import { useAuth, signOut } from '~/lib/auth'
import {
  AlertCircle,
  CalendarDays,
  Cake,
  Camera,
  Check,
  ChevronRight,
  Download,
  FileImage,
  FileText,
  HeartHandshake,
  HeartPulse,
  IdCard,
  LogOut,
  Mail,
  MapPin,
  Package,
  Pencil,
  Phone,
  ShieldCheck,
  Star,
  Trash2,
  Upload,
  User,
  X,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { Logo } from '~/components/primitives/Logo'
import { cn } from '~/lib/cn'

// Module-level non-null assert: the dashboard only mounts after AuthProvider
// settles a session, which itself bails out when supabase env is missing.
const supabase = supabaseNullable as NonNullable<typeof supabaseNullable>

// ─── Theme (matches FeedbackPage.tsx brand) ──────────────────────────────────
const PRIMARY = '#2E8EAD'
const PRIMARY_DK = '#24728B'
const PRIMARY_LT = '#A8D8EA'
const WEB_BG = '#EFF6F8'
const SUCCESS = '#3DB46A'
const STAR_GOLD = '#F5C518'

const BOOKING_LINK = 'https://www.doctolib.de/'

// ─── Types ────────────────────────────────────────────────────────────────────
type Company = 'sanimotion' | 'meisterschuh'

interface PatientRecord {
  id: number
  aufId: string
  vorname: string | null
  nachname: string | null
  leistungstext: string | null
  company: Company
  geburtsdatum: string | null
  adresse: string | null
  telefon: string | null
  email: string | null
  krankenkasse: string | null
  versicherungsnummer: string | null
  versicherungstyp: 'gesetzlich' | 'privat' | null
  profilePictureUrl: string | null
  careTakerName: string | null
  careTakerBeziehung: string | null
  careTakerTelefon: string | null
  careTakerEmail: string | null
}

interface FeedbackRecord {
  satisfaction_level: number | null
  is_in_good_condition: boolean | null
  has_changes: boolean | null
  is_used_regularly: boolean | null
  comments: string | null
}

interface DocumentRecord {
  id: string
  name: string
  type: 'pdf' | 'image'
  sizeKb: number
  uploadedAt: string
  kind: 'Rezept' | 'Arztbrief' | 'Versicherung' | 'Sonstiges'
  downloadUrl?: string | null
  storagePath?: string | null
}

interface Doctor {
  name: string
  link: string | null
}

// Exact questions used on the FeedbackPage
const FEEDBACK_QUESTIONS_FULL = [
  'Befindet sich das Hilfsmittel derzeit in einem ordnungsgemäßen Zustand?',
  'Blieben Funktion, Passform und Wirkung unverändert?',
  'Wird das Hilfsmittel regelmäßig und wie vorgesehen genutzt?',
] as const

// Sanimotion_join."Geburtsdatum" is stored as DD.MM.YYYY (German),
// patient_profiles.geburtsdatum as YYYY-MM-DD (ISO). Normalise both to ISO
// for comparison.
function normaliseDob(v: string | null | undefined): string {
  if (!v) return ''
  const s = v.trim()
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10)
  const m = s.match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})/)
  if (m) {
    const [, d, mo, y] = m
    return `${y}-${mo.padStart(2, '0')}-${d.padStart(2, '0')}`
  }
  return ''
}

// Build a "Strasse Hausnnr., PLZ Ort" address from the Sani_grouped row.
function buildAddressFromSource(row: Record<string, unknown> | null): string | null {
  if (!row) return null
  const strasse = ((row['Strasse'] as string | null) ?? '').trim()
  const hausnr  = ((row['Hausnnr.'] as string | null) ?? '').trim()
  const plz     = ((row['PLZ'] as string | null) ?? '').trim()
  const ort     = ((row['Ort'] as string | null) ?? '').trim()
  const line1   = [strasse, hausnr].filter(Boolean).join(' ').trim()
  const line2   = [plz, ort].filter(Boolean).join(' ').trim()
  const full    = [line1, line2].filter(Boolean).join(', ').trim()
  return full || null
}

// ─── Page ─────────────────────────────────────────────────────────────────────
// Reads from patient_profiles + Sani_grouped + Sanimotion_join via Supabase.
// Demo selection: ?auf_id=XYZ URL param (mirrors Sani_grouped."Auf.ID"),
// else lowest sani_grouped_id with a profile.
export function PatientDashboardPage() {
  const auth = useAuth()

  const [patient, setPatient] = useState<PatientRecord | null>(null)
  const [feedback, setFeedback] = useState<FeedbackRecord | null>(null)
  const [documents, setDocuments] = useState<DocumentRecord[]>([])
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Sanimotion – Mein Bereich'
  }, [])

  useEffect(() => {
    if (auth.status !== 'authed' || !auth.user) return

    let cancelled = false
    const userId = auth.user.id
    const userEmail = auth.user.email ?? null

    async function load() {
      setIsLoading(true)
      setLoadError(null)
      try {
        const { data: profile, error: profileError } = await supabase
          .from('patient_profiles')
          .select('*')
          .eq('user_id', userId)
          .maybeSingle()

        if (cancelled) return
        if (profileError) throw profileError
        if (!profile) {
          setLoadError('Profil wurde nicht gefunden.')
          setIsLoading(false)
          return
        }

        // Backfill profile.email from auth.users.email when missing —
        // older rows created before the trigger captured new.email
        // would otherwise render the email field as "Not submitted".
        if (userEmail && !profile.email) {
          await supabase
            .from('patient_profiles')
            .update({ email: userEmail })
            .eq('user_id', userId)
          ;(profile as { email: string | null }).email = userEmail
        }

        const aufId = (profile.auf_id as string | null) ?? null
        const company: Company = 'sanimotion'

        // Read-only fallback data from the dispensing system.
        // Sani_grouped is the *grouped* view — one row per patient with all
        // Hilfsmittel concatenated into Leistungstext, plus address, phone,
        // and Krankenkasse. Sanimotion_join has one row per Hilfsmittel; we
        // query it by Vorname+Nachname+Geburtsdatum to gather every Arzt the
        // patient has ever been treated by (across all Aufträge), plus a
        // Versicherungsnummer.
        // PostgREST treats `.` as a path separator in filters, so columns
        // like "Auf.ID" must be wrapped in double quotes in the JS string.
        let sourceRow: Record<string, unknown> | null = null
        let versNumberFromSource: string | null = null
        let doctorsFromSource: Doctor[] = []

        const profileVorname = (profile.vorname as string | null) ?? null
        const profileNachname = (profile.nachname as string | null) ?? null
        const profileDob = (profile.geburtsdatum as string | null) ?? null

        const [groupedRes, joinRes] = await Promise.all([
          aufId
            ? supabase
                .from('Sani_grouped')
                .select(
                  '"Vorname", "Nachname", "Geburtsdatum", "Leistungstext", "Kostenträger", "Strasse", "Hausnnr.", "PLZ", "Ort", mobile_nr, telefon_nr, email',
                )
                .filter('"Auf.ID"', 'eq', aufId)
                .limit(1)
            : Promise.resolve({ data: [] as Array<Record<string, unknown>> }),
          (profileVorname && profileNachname && profileDob)
            ? supabase
                .from('Sanimotion_join')
                .select('"Versicherungsnummer", "Arzt", "Geburtsdatum"')
                .ilike('"Vorname"', profileVorname)
                .ilike('"Nachname"', profileNachname)
            : Promise.resolve({ data: [] as Array<Record<string, unknown>> }),
        ])

        sourceRow = (groupedRes.data?.[0] as Record<string, unknown> | undefined) ?? null

        const normProfileDob = normaliseDob(profileDob)
        const joinRows = ((joinRes.data ?? []) as Array<Record<string, unknown>>).filter((r) => {
          if (!normProfileDob) return false
          return normaliseDob(r['Geburtsdatum'] as string | null) === normProfileDob
        })

        for (const r of joinRows) {
          const v = ((r['Versicherungsnummer'] as string | null) ?? '').trim()
          if (v) { versNumberFromSource = v; break }
        }

        // Collect unique Arzt names (case-insensitive dedupe, preserve casing)
        const arztByKey = new Map<string, string>()
        for (const r of joinRows) {
          const name = ((r['Arzt'] as string | null) ?? '').trim()
          if (!name) continue
          const key = name.toLowerCase()
          if (!arztByKey.has(key)) arztByKey.set(key, name)
        }
        const uniqueArztNames = Array.from(arztByKey.values())

        if (uniqueArztNames.length > 0) {
          // Pull the whole table — it's small and `Arzt` strings rarely match
          // doctor_name byte-for-byte (titles, punctuation, casing, ordering
          // all vary), so we match in JS with a normalisation pass.
          const { data: linksData, error: linksErr } = await supabase
            .from('doctolib_links')
            .select('doctor_name, link')

          // TEMP DIAGNOSTIC — remove once matcher is verified.
          console.log('[doctolib] arzt names from Sanimotion_join:', uniqueArztNames)
          console.log('[doctolib] doctolib_links rows:', linksData)
          if (linksErr) console.warn('[doctolib] SELECT error (RLS?):', linksErr)

          const normName = (s: string): string =>
            s
              .toLowerCase()
              .replace(/[.,]/g, ' ')
              .replace(/[\/()-]/g, ' ')
              .replace(/\b(?:dr|prof|med|praxis)\b/g, ' ')
              .replace(/\s+/g, ' ')
              .trim()

          // Build word-set for token-overlap matching as a last resort.
          const tokens = (s: string): Set<string> =>
            new Set(normName(s).split(' ').filter((t) => t.length >= 3))

          const linksList: Array<{ link: string | null; key: string; toks: Set<string>; raw: string }> = []
          let fallbackLink: string | null = null
          for (const row of (linksData ?? []) as Array<Record<string, unknown>>) {
            const name = ((row['doctor_name'] as string | null) ?? '').trim()
            const link = ((row['link'] as string | null) ?? '').trim() || null
            if (!name) continue
            if (name.toLowerCase() === 'others') {
              fallbackLink = link
              continue
            }
            const key = normName(name)
            if (key) linksList.push({ link, key, toks: tokens(name), raw: name })
          }

          const resolveLink = (arzt: string): string | null => {
            const target = normName(arzt)
            if (!target) return fallbackLink
            const targetToks = tokens(arzt)
            // 1. exact normalised match
            for (const e of linksList) {
              if (e.key === target) {
                console.log('[doctolib] exact match', arzt, '→', e.raw)
                return e.link ?? fallbackLink
              }
            }
            // 2. substring match either direction
            for (const e of linksList) {
              if (target.includes(e.key) || e.key.includes(target)) {
                console.log('[doctolib] substring match', arzt, '→', e.raw)
                return e.link ?? fallbackLink
              }
            }
            // 3. shared significant token (e.g. last name)
            for (const e of linksList) {
              for (const t of targetToks) {
                if (e.toks.has(t)) {
                  console.log('[doctolib] token match', arzt, '→', e.raw, 'via', t)
                  return e.link ?? fallbackLink
                }
              }
            }
            console.log('[doctolib] NO match', arzt, '→ fallback', fallbackLink)
            return fallbackLink
          }

          doctorsFromSource = uniqueArztNames.map((name) => ({
            name,
            link: resolveLink(name),
          }))
        }

        const addressFromSource = buildAddressFromSource(sourceRow)
        const phoneFromSource =
          ((sourceRow?.['mobile_nr'] as string | null) ?? '').trim() ||
          ((sourceRow?.['telefon_nr'] as string | null) ?? '').trim() ||
          null
        const emailFromSource =
          ((sourceRow?.['email'] as string | null) ?? '').trim() || null
        const krankenkasseFromSource =
          ((sourceRow?.['Kostenträger'] as string | null) ?? '').trim() || null

        // Resolve profile picture path → signed URL for the <img>.
        let profilePictureUrl: string | null = null
        const picPath = (profile.profile_picture_path as string | null) ?? null
        if (picPath) {
          const { data: signed } = await supabase
            .storage.from('patient-avatars')
            .createSignedUrl(picPath, 3600)
          profilePictureUrl = signed?.signedUrl ?? null
        }

        if (cancelled) return
        setPatient({
          id: 0,
          aufId: aufId ?? '',
          vorname:
            (profile.vorname as string | null) ??
            (sourceRow?.['Vorname'] as string | null) ??
            null,
          nachname:
            (profile.nachname as string | null) ??
            (sourceRow?.['Nachname'] as string | null) ??
            null,
          geburtsdatum:
            (profile.geburtsdatum as string | null) ??
            (sourceRow?.['Geburtsdatum'] as string | null) ??
            null,
          leistungstext: (sourceRow?.['Leistungstext'] as string | null) ?? null,
          company,
          telefon: (profile.telefon as string | null) ?? phoneFromSource,
          email: (profile.email as string | null) ?? userEmail ?? emailFromSource,
          adresse: (profile.adresse as string | null) ?? addressFromSource,
          profilePictureUrl,
          krankenkasse: (profile.krankenkasse as string | null) ?? krankenkasseFromSource,
          versicherungsnummer:
            (profile.versicherungsnummer as string | null) ?? versNumberFromSource,
          versicherungstyp:
            (profile.versicherungstyp as 'gesetzlich' | 'privat' | null) ?? null,
          careTakerName: (profile.caretaker_name as string | null) ?? null,
          careTakerBeziehung: (profile.caretaker_beziehung as string | null) ?? null,
          careTakerTelefon: (profile.caretaker_telefon as string | null) ?? null,
          careTakerEmail: (profile.caretaker_email as string | null) ?? null,
        })
        setDoctors(doctorsFromSource)

        // Feedback — find by user_id first, fall back to auf_id (for QR
        // submissions made anonymously before signup). Backfill the user_id
        // when we link an anonymous row to this account.
        let fb: Record<string, unknown> | null = null
        const { data: fbByUser } = await supabase
          .from('qr_feedback_responses')
          .select('*')
          .eq('user_id', userId)
          .eq('company', company)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle()

        if (fbByUser) {
          fb = fbByUser as Record<string, unknown>
        } else if (aufId) {
          const { data: fbByAuf } = await supabase
            .from('qr_feedback_responses')
            .select('*')
            .eq('auf_id', aufId)
            .eq('company', company)
            .order('created_at', { ascending: false })
            .limit(1)
            .maybeSingle()
          if (fbByAuf) {
            fb = fbByAuf as Record<string, unknown>
            await supabase
              .from('qr_feedback_responses')
              .update({ user_id: userId })
              .eq('auf_id', aufId)
              .is('user_id', null)
          }
        }

        if (cancelled) return
        setFeedback(
          fb
            ? {
                satisfaction_level: (fb.satisfaction_level as number | null) ?? null,
                is_in_good_condition: (fb.is_in_good_condition as boolean | null) ?? null,
                has_changes: (fb.has_changes as boolean | null) ?? null,
                is_used_regularly: (fb.is_used_regularly as boolean | null) ?? null,
                comments: (fb.comments as string | null) ?? null,
              }
            : null,
        )

        // Documents — list rows + resolve signed URL for each.
        const { data: docsRows } = await supabase
          .from('patient_documents')
          .select('*')
          .eq('user_id', userId)
          .order('uploaded_at', { ascending: false })
        const rows = (docsRows ?? []) as Array<Record<string, unknown>>
        const resolved: DocumentRecord[] = await Promise.all(
          rows.map(async (d) => {
            const storagePath = d.storage_path as string
            const { data: signed } = await supabase
              .storage.from('patient-documents')
              .createSignedUrl(storagePath, 3600)
            const mime = (d.mime_type as string | null) ?? ''
            return {
              id: d.id as string,
              name: d.name as string,
              type: mime.startsWith('image/') ? 'image' : 'pdf',
              sizeKb: Math.max(1, Math.round(((d.size_bytes as number | null) ?? 0) / 1024)),
              uploadedAt: d.uploaded_at
                ? new Date(d.uploaded_at as string).toLocaleDateString('de-DE')
                : '',
              kind: ((d.kind as string | null) ?? 'Sonstiges') as DocumentRecord['kind'],
              downloadUrl: signed?.signedUrl ?? null,
              storagePath,
            }
          }),
        )
        if (cancelled) return
        setDocuments(resolved)

        setIsLoading(false)
      } catch (e) {
        if (cancelled) return
        setLoadError(`Fehler beim Laden: ${e instanceof Error ? e.message : String(e)}`)
        setIsLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [auth.status, auth.user?.id])

  async function savePatient(updates: Partial<PatientRecord>) {
    if (!patient || !auth.user) return
    const userId = auth.user.id

    // Profile picture comes in as a base64 dataURL (camera capture) or null (delete).
    // Upload to the bucket and store just the path on patient_profiles.
    let pictureUpdate: { profile_picture_path: string | null } | null = null
    let resolvedSignedUrl: string | null = patient.profilePictureUrl
    if ('profilePictureUrl' in updates) {
      const value = updates.profilePictureUrl
      if (value === null) {
        pictureUpdate = { profile_picture_path: null }
        resolvedSignedUrl = null
      } else if (typeof value === 'string' && value.startsWith('data:')) {
        const match = value.match(/^data:(.+);base64,(.+)$/)
        if (match) {
          const [, mime, b64] = match
          const ext = mime.split('/')[1]?.split('+')[0] ?? 'jpg'
          const path = `${userId}/avatar.${ext}`
          const binary = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0))
          const blob = new Blob([binary], { type: mime })
          const { error: upErr } = await supabase
            .storage.from('patient-avatars')
            .upload(path, blob, { upsert: true, contentType: mime })
          if (!upErr) {
            pictureUpdate = { profile_picture_path: path }
            const { data: signed } = await supabase
              .storage.from('patient-avatars')
              .createSignedUrl(path, 3600)
            resolvedSignedUrl = signed?.signedUrl ?? null
          }
        }
      }
    }

    setPatient((prev) =>
      prev ? { ...prev, ...updates, profilePictureUrl: resolvedSignedUrl } : prev,
    )

    const dbUpdates: Record<string, unknown> = {}
    if ('telefon' in updates) dbUpdates.telefon = updates.telefon
    if ('email' in updates) dbUpdates.email = updates.email
    if ('adresse' in updates) dbUpdates.adresse = updates.adresse
    if ('krankenkasse' in updates) dbUpdates.krankenkasse = updates.krankenkasse
    if ('versicherungsnummer' in updates) dbUpdates.versicherungsnummer = updates.versicherungsnummer
    if ('versicherungstyp' in updates) dbUpdates.versicherungstyp = updates.versicherungstyp
    if ('careTakerName' in updates) dbUpdates.caretaker_name = updates.careTakerName
    if ('careTakerBeziehung' in updates) dbUpdates.caretaker_beziehung = updates.careTakerBeziehung
    if ('careTakerTelefon' in updates) dbUpdates.caretaker_telefon = updates.careTakerTelefon
    if ('careTakerEmail' in updates) dbUpdates.caretaker_email = updates.careTakerEmail
    if (pictureUpdate) Object.assign(dbUpdates, pictureUpdate)
    if (Object.keys(dbUpdates).length === 0) return
    dbUpdates.updated_at = new Date().toISOString()

    await supabase
      .from('patient_profiles')
      .update(dbUpdates)
      .eq('user_id', userId)
  }

  async function saveFeedback(updates: Partial<FeedbackRecord>) {
    if (!patient || !auth.user) return
    const merged: FeedbackRecord = {
      satisfaction_level: feedback?.satisfaction_level ?? null,
      is_in_good_condition: feedback?.is_in_good_condition ?? null,
      has_changes: feedback?.has_changes ?? null,
      is_used_regularly: feedback?.is_used_regularly ?? null,
      comments: feedback?.comments ?? null,
      ...updates,
    }
    setFeedback(merged)

    if (!patient.aufId) return
    await supabase
      .from('qr_feedback_responses')
      .upsert(
        {
          auf_id: patient.aufId,
          company: patient.company,
          user_id: auth.user.id,
          satisfaction_level: merged.satisfaction_level,
          is_in_good_condition: merged.is_in_good_condition,
          has_changes: merged.has_changes,
          is_used_regularly: merged.is_used_regularly,
          comments: merged.comments,
        },
        { onConflict: 'auf_id,company' },
      )
  }

  async function addDocument(file: File) {
    if (!auth.user) return
    const userId = auth.user.id
    const ext = file.name.split('.').pop()?.toLowerCase() || 'bin'
    const fileId = crypto.randomUUID()
    const storagePath = `${userId}/${fileId}.${ext}`

    const { error: uploadError } = await supabase
      .storage.from('patient-documents')
      .upload(storagePath, file, { contentType: file.type, upsert: false })
    if (uploadError) return

    const { data, error } = await supabase
      .from('patient_documents')
      .insert({
        user_id: userId,
        name: file.name,
        kind: 'Sonstiges',
        mime_type: file.type,
        size_bytes: file.size,
        storage_path: storagePath,
      })
      .select()
      .single()
    if (error || !data) {
      await supabase.storage.from('patient-documents').remove([storagePath])
      return
    }

    const { data: signed } = await supabase
      .storage.from('patient-documents')
      .createSignedUrl(storagePath, 3600)

    const today = new Date().toLocaleDateString('de-DE')
    setDocuments((prev) => [
      {
        id: data.id as string,
        name: data.name as string,
        type: file.type.startsWith('image/') ? 'image' : 'pdf',
        sizeKb: Math.max(1, Math.round(file.size / 1024)),
        uploadedAt: today,
        kind: ((data.kind as string | null) ?? 'Sonstiges') as DocumentRecord['kind'],
        downloadUrl: signed?.signedUrl ?? null,
        storagePath,
      },
      ...prev,
    ])
  }

  async function removeDocument(docId: string) {
    const { data: row } = await supabase
      .from('patient_documents')
      .select('storage_path')
      .eq('id', docId)
      .maybeSingle()
    setDocuments((prev) => prev.filter((d) => d.id !== docId))
    if (row?.storage_path) {
      await supabase.storage.from('patient-documents').remove([row.storage_path as string])
    }
    await supabase.from('patient_documents').delete().eq('id', docId)
  }

  if (auth.status === 'loading') return <DashboardLoading />
  if (auth.status === 'unauthed') {
    return <Navigate to="/anmelden" replace />
  }
  if (auth.status === 'no-access') {
    return (
      <DashboardError
        message="Dieses Konto ist nicht als Patient registriert."
        actionLabel="Abmelden"
        onAction={() => { void signOut() }}
      />
    )
  }

  if (isLoading) return <DashboardLoading />
  if (loadError || !patient) {
    return <DashboardError message={loadError ?? 'Patient nicht gefunden.'} />
  }

  return (
    <DashboardShell headerPatient={patient}>
      <DashboardContent
        patient={patient}
        feedback={feedback}
        documents={documents}
        doctors={doctors}
        onSavePatient={savePatient}
        onSaveFeedback={saveFeedback}
        onAddDocument={addDocument}
        onRemoveDocument={removeDocument}
      />
    </DashboardShell>
  )
}

function DashboardLoading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: WEB_BG }}
    >
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span
          className="w-4 h-4 border-2 rounded-full animate-spin"
          style={{ borderColor: '#D1D9DF', borderTopColor: PRIMARY_DK }}
        />
        Lade Patientendaten…
      </div>
    </div>
  )
}

function DashboardError({
  message,
  actionLabel,
  onAction,
}: {
  message: string
  actionLabel?: string
  onAction?: () => void
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: WEB_BG }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-md text-center max-w-sm flex flex-col gap-3">
        <AlertCircle className="mx-auto text-red-500" size={32} />
        <p className="text-sm text-gray-700">{message}</p>
        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className="mt-1 py-2 rounded-xl text-[14px] font-bold text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Shell (sticky header + content) ──────────────────────────────────────────
function DashboardShell({
  children,
  headerPatient,
}: {
  children: React.ReactNode
  headerPatient?: PatientRecord
}) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: WEB_BG }}>
      <header
        className="sticky top-0 z-30 border-b"
        style={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'saturate(1.4) blur(12px)',
          WebkitBackdropFilter: 'saturate(1.4) blur(12px)',
          borderColor: 'rgba(36,114,139,0.08)',
        }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          <div className="flex items-center">
            <Logo className="h-10 w-auto sm:h-12 lg:h-12" />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="tel:030235957610"
              aria-label="Sanimotion anrufen"
              className="flex items-center justify-center w-9 h-9 rounded-full transition hover:opacity-90"
              style={{ backgroundColor: `${PRIMARY}12`, color: PRIMARY_DK }}
            >
              <Phone size={16} />
            </a>
            {headerPatient && <HeaderUserChip patient={headerPatient} />}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-5 sm:py-8 pb-16">{children}</main>

      <footer className="mx-auto max-w-5xl px-4 sm:px-6 pb-8 text-center text-xs" style={{ color: '#6B7B8A' }}>
        © Sanimotion Sanitätshäuser Berlin · DSGVO-konform · Daten in Deutschland gespeichert
      </footer>
    </div>
  )
}

function HeaderUserChip({ patient }: { patient: PatientRecord }) {
  async function handleLogout() {
    try {
      await signOut()
    } catch (err) {
      console.error('signOut failed:', err)
    } finally {
      // Use replace so the user can't hit Back into the unauthed dashboard,
      // and use href as a belt-and-braces fallback if replace is blocked.
      try {
        window.location.replace('https://www.sanimotion.com')
      } catch {
        window.location.href = 'https://www.sanimotion.com'
      }
    }
  }
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 border"
        style={{ borderColor: 'rgba(36,114,139,0.15)', backgroundColor: 'white' }}
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
          {patient.profilePictureUrl ? (
            <img src={patient.profilePictureUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <DefaultAvatar />
          )}
        </span>
        <span className="hidden sm:inline text-xs font-semibold text-gray-700 truncate max-w-[110px]">
          {patient.vorname ?? 'Mein Konto'}
        </span>
      </div>
      <button
        type="button"
        onClick={handleLogout}
        aria-label="Abmelden"
        title="Abmelden"
        className="flex items-center justify-center w-9 h-9 rounded-full border focus:outline-none transition-colors"
        style={{
          borderColor: 'rgba(36,114,139,0.15)',
          backgroundColor: 'white',
          color: PRIMARY_DK,
        }}
      >
        <LogOut size={16} />
      </button>
    </div>
  )
}

function DefaultAvatar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sani-avatar-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CDE7F0" />
          <stop offset="100%" stopColor="#8FC0D4" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#sani-avatar-bg)" />
      <path d="M10 100 L20 82 Q35 78 50 84 Q65 78 80 82 L90 100 Z" fill="#3E6278" />
      <path d="M42 80 L50 92 L58 80 L54 79 L50 85 L46 79 Z" fill="#F6F6F6" />
      <path d="M44 68 L44 80 L50 84 L56 80 L56 68 Z" fill="#E8C19F" />
      <ellipse cx="50" cy="48" rx="21" ry="24" fill="#F4D5B0" />
      <ellipse cx="28" cy="52" rx="3" ry="5" fill="#F4D5B0" />
      <ellipse cx="72" cy="52" rx="3" ry="5" fill="#F4D5B0" />
      <path
        d="M29 46 Q29 30 39 26 Q44 32 50 32 Q56 32 61 26 Q71 30 71 46 Q71 49 70 51 Q65 43 60 41 Q55 39 50 39 Q45 39 40 41 Q35 43 30 51 Q29 49 29 46 Z"
        fill="#EDEDED"
      />
      <path d="M33 42 Q39 39 46 42" stroke="#C9C9C9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M54 42 Q61 39 67 42" stroke="#C9C9C9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="50" r="6" fill="#FFFFFF22" stroke="#2C2C2C" strokeWidth="1.5" />
      <circle cx="60" cy="50" r="6" fill="#FFFFFF22" stroke="#2C2C2C" strokeWidth="1.5" />
      <line x1="46" y1="50" x2="54" y2="50" stroke="#2C2C2C" strokeWidth="1.5" />
      <line x1="34" y1="50" x2="30" y2="49" stroke="#2C2C2C" strokeWidth="1.5" />
      <line x1="66" y1="50" x2="70" y2="49" stroke="#2C2C2C" strokeWidth="1.5" />
      <circle cx="40" cy="50" r="1.4" fill="#2C2C2C" />
      <circle cx="60" cy="50" r="1.4" fill="#2C2C2C" />
      <path d="M50 54 Q47 59 46 63 Q48 65 50 64 Q52 65 54 63 Q53 59 50 54 Z" fill="#E8C19F" />
      <path d="M37 67 Q44 65 50 66 Q56 65 63 67 Q58 71 50 70 Q42 71 37 67 Z" fill="#EDEDED" />
      <path d="M44 71 Q50 74 56 71" stroke="#A5674B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

// ─── Content ──────────────────────────────────────────────────────────────────
function DashboardContent({
  patient,
  feedback,
  documents,
  doctors,
  onSavePatient,
  onSaveFeedback,
  onAddDocument,
  onRemoveDocument,
}: {
  patient: PatientRecord
  feedback: FeedbackRecord | null
  documents: DocumentRecord[]
  doctors: Doctor[]
  onSavePatient: (updates: Partial<PatientRecord>) => Promise<void>
  onSaveFeedback: (updates: Partial<FeedbackRecord>) => Promise<void>
  onAddDocument: (file: File) => Promise<void>
  onRemoveDocument: (id: string) => Promise<void>
}) {
  const items = useMemo(
    () =>
      (patient.leistungstext ?? '')
        .split(/[\r\n]+|\s{2,}/)
        .map((s) => s.trim().replace(/^•\s*/, ''))
        .filter(Boolean)
        .map((s) => (s === s.toUpperCase() ? toTitleCase(s) : s)),
    [patient.leistungstext],
  )

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <ProfileHeader patient={patient} itemsCount={items.length} onSave={onSavePatient} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">
          <StammdatenCard patient={patient} onSave={onSavePatient} />
          <BetreuungspersonCard patient={patient} onSave={onSavePatient} />
          <VersicherungCard patient={patient} onSave={onSavePatient} />
          <HilfsmittelCard items={items} />
          <DokumenteCard
            documents={documents}
            onAdd={onAddDocument}
            onRemove={onRemoveDocument}
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <TermineCard doctors={doctors} />
          <FeedbackCard
            feedback={feedback}
            company={patient.company}
            aufId={patient.aufId}
            onSave={onSaveFeedback}
          />
        </div>
      </div>
    </div>
  )
}

// ─── Profile header ───────────────────────────────────────────────────────────
function ProfileHeader({
  patient,
  itemsCount,
  onSave,
}: {
  patient: PatientRecord
  itemsCount: number
  onSave: (updates: Partial<PatientRecord>) => Promise<void>
}) {
  const fullName = [patient.vorname, patient.nachname].filter(Boolean).join(' ').trim() || 'Patient'

  const fileInputRef = useRef<HTMLInputElement>(null)

  function handlePick() {
    fileInputRef.current?.click()
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onSave({ profilePictureUrl: reader.result })
      }
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  function handleRemove() {
    onSave({ profilePictureUrl: null })
  }

  return (
    <section
      className="relative overflow-hidden rounded-2xl p-5 sm:p-6 text-white shadow-[0_10px_30px_-12px_rgba(36,114,139,0.55)]"
      style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DK} 100%)` }}
    >
      <div
        aria-hidden
        className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-20"
        style={{ backgroundColor: PRIMARY_LT }}
      />

      <div className="relative flex items-center gap-4">
        <div className="relative flex-shrink-0 group">
          <button
            type="button"
            onClick={handlePick}
            aria-label="Profilbild ändern"
            className="relative overflow-hidden flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full transition active:scale-95"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.35)' }}
          >
            {patient.profilePictureUrl ? (
              <img
                src={patient.profilePictureUrl}
                alt="Profilbild"
                className="w-full h-full object-cover"
              />
            ) : (
              <DefaultAvatar />
            )}
            <span
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            >
              <Camera size={18} className="text-white" />
            </span>
          </button>
          <span
            onClick={handlePick}
            className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center w-6 h-6 rounded-full cursor-pointer transition active:scale-95 border-2"
            style={{ backgroundColor: 'white', color: PRIMARY_DK, borderColor: PRIMARY }}
            aria-hidden
          >
            <Camera size={12} />
          </span>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] sm:text-xs uppercase tracking-wider opacity-80 font-semibold">Patient</p>
          <h1 className="text-xl sm:text-2xl font-bold truncate">{fullName}</h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-xs sm:text-sm opacity-90">
            {patient.geburtsdatum && <span>geb. {patient.geburtsdatum}</span>}
            {patient.profilePictureUrl && (
              <button
                type="button"
                onClick={handleRemove}
                className="underline underline-offset-2 opacity-75 hover:opacity-100"
              >
                Bild entfernen
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="relative mt-4 pt-4 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4">
        <Stat label="Hilfsmittel" value={String(itemsCount)} />
        <Stat label="Sanitätshaus" value={patient.company === 'sanimotion' ? 'Sanimotion' : 'Meisterschuh'} />
        <Stat label="Status" value="Aktiv" positive />
      </div>
    </section>
  )
}

function Stat({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="flex flex-col min-w-0">
      <span className="text-[10px] sm:text-xs uppercase tracking-wider opacity-75 font-semibold">{label}</span>
      <span className="text-sm sm:text-base font-bold truncate flex items-center gap-1.5">
        {positive && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#7CE39A' }} />}
        {value}
      </span>
    </div>
  )
}

// ─── Stammdaten ───────────────────────────────────────────────────────────────
function StammdatenCard({
  patient,
  onSave,
}: {
  patient: PatientRecord
  onSave: (updates: Partial<PatientRecord>) => Promise<void>
}) {
  const fullName = [patient.vorname, patient.nachname].filter(Boolean).join(' ').trim() || '—'
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [draft, setDraft] = useState({
    geburtsdatum: patient.geburtsdatum ?? '',
    telefon: patient.telefon ?? '',
    email: patient.email ?? '',
    adresse: patient.adresse ?? '',
  })

  function openEdit() {
    setDraft({
      geburtsdatum: patient.geburtsdatum ?? '',
      telefon: patient.telefon ?? '',
      email: patient.email ?? '',
      adresse: patient.adresse ?? '',
    })
    setEditing(true)
  }

  async function handleSave() {
    setSaving(true)
    try {
      await onSave({
        geburtsdatum: draft.geburtsdatum.trim() || null,
        telefon: draft.telefon.trim() || null,
        email: draft.email.trim() || null,
        adresse: draft.adresse.trim() || null,
      })
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  return (
    <SectionCard
      icon={<User size={18} style={{ color: PRIMARY }} />}
      title="Stammdaten"
      subtitle="Ihre persönlichen Daten"
      action={!editing && <EditIconButton onClick={openEdit} />}
    >
      {editing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
          <EditField
            label="Geburtsdatum"
            value={draft.geburtsdatum}
            onChange={(v) => setDraft((d) => ({ ...d, geburtsdatum: v }))}
            placeholder="TT.MM.JJJJ"
          />
          <EditField
            label="Telefon"
            value={draft.telefon}
            onChange={(v) => setDraft((d) => ({ ...d, telefon: v }))}
            placeholder="+49 170 1234567"
            type="tel"
          />
          <EditField
            label="E-Mail"
            value={draft.email}
            onChange={(v) => setDraft((d) => ({ ...d, email: v }))}
            placeholder="name@example.de"
            type="email"
          />
          <EditField
            label="Adresse"
            value={draft.adresse}
            onChange={(v) => setDraft((d) => ({ ...d, adresse: v }))}
            placeholder="Straße, PLZ Stadt"
            full
          />
          <div className="sm:col-span-2">
            <EditFormActions onSave={handleSave} onCancel={() => setEditing(false)} saving={saving} />
          </div>
        </div>
      ) : (
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          <InfoField label="Name" value={fullName} />
          <InfoField label="Geburtsdatum" value={patient.geburtsdatum} icon={<Cake size={14} />} />
          <InfoField
            label="Telefon"
            value={patient.telefon}
            icon={<Phone size={14} />}
            href={patient.telefon ? `tel:${patient.telefon.replace(/\s/g, '')}` : undefined}
          />
          <InfoField
            label="E-Mail"
            value={patient.email}
            icon={<Mail size={14} />}
            href={patient.email ? `mailto:${patient.email}` : undefined}
          />
          <InfoField label="Adresse" value={patient.adresse} icon={<MapPin size={14} />} full />
        </dl>
      )}
    </SectionCard>
  )
}

function EditField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  full,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  full?: boolean
}) {
  return (
    <div className={cn(full && 'sm:col-span-2')}>
      <Label className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-1">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 text-sm"
      />
    </div>
  )
}

// ─── Betreuungsperson ─────────────────────────────────────────────────────────
function BetreuungspersonCard({
  patient,
  onSave,
}: {
  patient: PatientRecord
  onSave: (updates: Partial<PatientRecord>) => Promise<void>
}) {
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [draft, setDraft] = useState({
    careTakerName: patient.careTakerName ?? '',
    careTakerBeziehung: patient.careTakerBeziehung ?? '',
    careTakerTelefon: patient.careTakerTelefon ?? '',
    careTakerEmail: patient.careTakerEmail ?? '',
  })

  const hasData =
    !!patient.careTakerName ||
    !!patient.careTakerBeziehung ||
    !!patient.careTakerTelefon ||
    !!patient.careTakerEmail

  function openEdit() {
    setDraft({
      careTakerName: patient.careTakerName ?? '',
      careTakerBeziehung: patient.careTakerBeziehung ?? '',
      careTakerTelefon: patient.careTakerTelefon ?? '',
      careTakerEmail: patient.careTakerEmail ?? '',
    })
    setEditing(true)
  }

  async function handleSave() {
    setSaving(true)
    try {
      await onSave({
        careTakerName: draft.careTakerName.trim() || null,
        careTakerBeziehung: draft.careTakerBeziehung.trim() || null,
        careTakerTelefon: draft.careTakerTelefon.trim() || null,
        careTakerEmail: draft.careTakerEmail.trim() || null,
      })
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  return (
    <SectionCard
      icon={<HeartHandshake size={18} style={{ color: PRIMARY }} />}
      title="Betreuungsperson"
      subtitle="Angehörige oder pflegende Person"
      action={!editing && <EditIconButton onClick={openEdit} label={hasData ? 'Bearbeiten' : 'Hinzufügen'} />}
    >
      {editing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
          <EditField
            label="Name"
            value={draft.careTakerName}
            onChange={(v) => setDraft((d) => ({ ...d, careTakerName: v }))}
            placeholder="Vor- und Nachname"
          />
          <EditField
            label="Beziehung"
            value={draft.careTakerBeziehung}
            onChange={(v) => setDraft((d) => ({ ...d, careTakerBeziehung: v }))}
            placeholder="z. B. Tochter, Ehepartner"
          />
          <EditField
            label="Telefon"
            value={draft.careTakerTelefon}
            onChange={(v) => setDraft((d) => ({ ...d, careTakerTelefon: v }))}
            placeholder="+49 170 1234567"
            type="tel"
          />
          <EditField
            label="E-Mail"
            value={draft.careTakerEmail}
            onChange={(v) => setDraft((d) => ({ ...d, careTakerEmail: v }))}
            placeholder="name@example.de"
            type="email"
          />
          <div className="sm:col-span-2">
            <EditFormActions onSave={handleSave} onCancel={() => setEditing(false)} saving={saving} />
          </div>
        </div>
      ) : hasData ? (
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          <InfoField label="Name" value={patient.careTakerName} icon={<User size={14} />} />
          <InfoField label="Beziehung" value={patient.careTakerBeziehung} icon={<HeartHandshake size={14} />} />
          <InfoField
            label="Telefon"
            value={patient.careTakerTelefon}
            icon={<Phone size={14} />}
            href={patient.careTakerTelefon ? `tel:${patient.careTakerTelefon.replace(/\s/g, '')}` : undefined}
          />
          <InfoField
            label="E-Mail"
            value={patient.careTakerEmail}
            icon={<Mail size={14} />}
            href={patient.careTakerEmail ? `mailto:${patient.careTakerEmail}` : undefined}
          />
        </dl>
      ) : (
        <p className="text-sm text-gray-600 leading-relaxed">
          Hinterlegen Sie eine Kontaktperson, die wir bei Bedarf erreichen können – z. B. eine/einen Angehörige/n
          oder Pflegeperson.
        </p>
      )}
    </SectionCard>
  )
}

// ─── Versicherung ─────────────────────────────────────────────────────────────
function VersicherungCard({
  patient,
  onSave,
}: {
  patient: PatientRecord
  onSave: (updates: Partial<PatientRecord>) => Promise<void>
}) {
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [draft, setDraft] = useState({
    krankenkasse: patient.krankenkasse ?? '',
    versicherungsnummer: patient.versicherungsnummer ?? '',
    versicherungstyp: patient.versicherungstyp ?? '',
  })

  const typeLabel =
    patient.versicherungstyp === 'gesetzlich'
      ? 'Gesetzlich versichert'
      : patient.versicherungstyp === 'privat'
        ? 'Privat versichert'
        : null

  function openEdit() {
    setDraft({
      krankenkasse: patient.krankenkasse ?? '',
      versicherungsnummer: patient.versicherungsnummer ?? '',
      versicherungstyp: patient.versicherungstyp ?? '',
    })
    setEditing(true)
  }

  async function handleSave() {
    setSaving(true)
    try {
      const typ = draft.versicherungstyp === 'gesetzlich' || draft.versicherungstyp === 'privat'
        ? (draft.versicherungstyp as 'gesetzlich' | 'privat')
        : null
      await onSave({
        krankenkasse: draft.krankenkasse.trim() || null,
        versicherungsnummer: draft.versicherungsnummer.trim() || null,
        versicherungstyp: typ,
      })
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  return (
    <SectionCard
      icon={<ShieldCheck size={18} style={{ color: PRIMARY }} />}
      title="Versicherung"
      subtitle="Krankenkasse & Versicherungsdaten"
      action={!editing && <EditIconButton onClick={openEdit} />}
    >
      {editing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
          <EditField
            label="Krankenkasse"
            value={draft.krankenkasse}
            onChange={(v) => setDraft((d) => ({ ...d, krankenkasse: v }))}
            placeholder="z. B. AOK Nordost"
            full
          />
          <EditField
            label="Versicherungsnummer"
            value={draft.versicherungsnummer}
            onChange={(v) => setDraft((d) => ({ ...d, versicherungsnummer: v }))}
            placeholder="A123456789"
          />
          <div>
            <Label className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-1">
              Versicherungstyp
            </Label>
            <div className="flex gap-2">
              {(['gesetzlich', 'privat'] as const).map((t) => {
                const active = draft.versicherungstyp === t
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, versicherungstyp: active ? '' : t }))}
                    className={cn(
                      'flex-1 px-3 h-10 rounded-lg text-xs font-semibold border transition',
                      active ? 'text-white' : 'text-gray-700 bg-white hover:bg-gray-50',
                    )}
                    style={{
                      backgroundColor: active ? PRIMARY : undefined,
                      borderColor: active ? PRIMARY : '#E6EEF2',
                    }}
                  >
                    {t === 'gesetzlich' ? 'Gesetzlich' : 'Privat'}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="sm:col-span-2">
            <EditFormActions onSave={handleSave} onCancel={() => setEditing(false)} saving={saving} />
          </div>
        </div>
      ) : (
        <>
          <div
            className="relative overflow-hidden rounded-2xl p-4 sm:p-5 text-white mb-3"
            style={{ background: `linear-gradient(135deg, ${PRIMARY_DK} 0%, #1B5A70 100%)` }}
          >
            <div
              aria-hidden
              className="absolute -right-6 -bottom-10 w-32 h-32 rounded-full opacity-20"
              style={{ backgroundColor: PRIMARY_LT }}
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider opacity-75 font-semibold">Krankenkasse</p>
                <p className="text-base sm:text-lg font-bold truncate">{patient.krankenkasse ?? '—'}</p>
              </div>
              <IdCard size={22} className="opacity-85 flex-shrink-0" />
            </div>

            <div className="relative mt-4">
              <p className="text-[11px] uppercase tracking-wider opacity-75 font-semibold">Versicherungsnummer</p>
              <p className="text-lg sm:text-xl font-mono font-bold tracking-wider mt-0.5">
                {patient.versicherungsnummer ?? '— — — — — —'}
              </p>
            </div>

            {typeLabel && (
              <div className="relative mt-3">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.28)' }}
                >
                  <ShieldCheck size={11} />
                  {typeLabel}
                </span>
              </div>
            )}
          </div>

          {!patient.versicherungsnummer && (
            <p className="text-xs text-gray-500 leading-relaxed">
              Versicherungsdaten sind noch nicht hinterlegt. Tippen Sie auf <strong>Bearbeiten</strong>, um sie zu ergänzen.
            </p>
          )}
        </>
      )}
    </SectionCard>
  )
}

// ─── Hilfsmittel ──────────────────────────────────────────────────────────────
function HilfsmittelCard({ items }: { items: string[] }) {
  const [expanded, setExpanded] = useState(false)
  const preview = 3
  const visible = expanded ? items : items.slice(0, preview)
  const hasMore = items.length > preview

  return (
    <SectionCard
      icon={<Package size={18} style={{ color: PRIMARY }} />}
      title="Meine Hilfsmittel"
      subtitle={items.length > 0 ? `${items.length} aktive Versorgung${items.length === 1 ? '' : 'en'}` : 'Keine Hilfsmittel hinterlegt'}
    >
      {items.length === 0 ? (
        <EmptyLine text="Sobald eine Versorgung bei uns erfasst ist, erscheint sie hier." />
      ) : (
        <ul className="flex flex-col gap-2">
          {visible.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl border bg-white/60"
              style={{ borderColor: '#E6EEF2' }}
            >
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${PRIMARY}15` }}
              >
                <HeartPulse size={14} style={{ color: PRIMARY_DK }} />
              </span>
              <p className="text-sm sm:text-base text-gray-800 leading-snug">{item}</p>
            </li>
          ))}
        </ul>
      )}

      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-sm font-semibold inline-flex items-center gap-1"
          style={{ color: PRIMARY_DK }}
        >
          {expanded ? 'Weniger anzeigen' : `Alle ${items.length} anzeigen`}
          <ChevronRight size={14} className={cn('transition-transform', expanded && 'rotate-90')} />
        </button>
      )}
    </SectionCard>
  )
}

// ─── Termine ──────────────────────────────────────────────────────────────────
function TermineCard({ doctors }: { doctors: Doctor[] }) {
  return (
    <SectionCard
      icon={<CalendarDays size={18} style={{ color: PRIMARY }} />}
      title="Termine"
      subtitle={
        doctors.length > 0
          ? `${doctors.length} ${doctors.length === 1 ? 'Arzt' : 'Ärzte'} verfügbar`
          : 'Kein bevorstehender Termin'
      }
    >
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        Buchen Sie online einen Termin bei Ihrem behandelnden Arzt.
      </p>

      {doctors.length > 0 && (
        <div className="flex flex-col gap-2 mb-3">
          {doctors.map((doctor) => {
            const href = doctor.link ?? BOOKING_LINK
            return (
              <a
                key={doctor.name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline block"
              >
                <div
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl border transition-colors hover:opacity-90"
                  style={{
                    borderColor: `${PRIMARY}40`,
                    background: `${PRIMARY}08`,
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      <HeartPulse size={14} className="text-white" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[13px] font-bold text-gray-900 leading-tight truncate">
                        {doctor.name}
                      </span>
                      <span className="text-[11px] text-gray-500 leading-tight">
                        Termin online buchen
                      </span>
                    </div>
                  </div>
                  <span className="text-[16px] font-bold flex-shrink-0" style={{ color: PRIMARY }}>›</span>
                </div>
              </a>
            )
          })}
        </div>
      )}

      <a
        href={BOOKING_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline block rounded-xl overflow-hidden transition active:scale-[0.99]"
        style={{
          background: `linear-gradient(135deg, #0596DE 0%, #0079C1 100%)`,
          boxShadow: '0 6px 18px -8px rgba(5,150,222,0.5)',
        }}
      >
        <div className="px-4 py-3 flex flex-col items-center gap-1.5">
          <img
            src="/assets/doctolib_white_logo.png"
            alt="Doctolib"
            className="h-3.5 object-contain"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
          <p className="text-white text-center font-bold text-[14px] leading-tight">
            Arzttermin online vereinbaren
          </p>
          <div className="w-full bg-white rounded-lg py-1.5 flex items-center justify-center mt-0.5">
            <span className="text-[12px] font-extrabold tracking-wider" style={{ color: '#0596DE' }}>
              HIER KLICKEN →
            </span>
          </div>
        </div>
      </a>
    </SectionCard>
  )
}

// ─── Dokumente ────────────────────────────────────────────────────────────────
function DokumenteCard({
  documents,
  onAdd,
  onRemove,
}: {
  documents: DocumentRecord[]
  onAdd: (file: File) => Promise<void>
  onRemove: (id: string) => Promise<void>
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleUploadClick() {
    fileInputRef.current?.click()
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    e.target.value = ''
    for (const file of files) {
      await onAdd(file)
    }
  }

  function handleDelete(id: string) {
    void onRemove(id)
  }

  return (
    <SectionCard
      icon={<FileText size={18} style={{ color: PRIMARY }} />}
      title="Meine Dokumente"
      subtitle={documents.length > 0 ? `${documents.length} gespeichert` : 'Noch keine Dokumente'}
      action={
        <button
          type="button"
          onClick={handleUploadClick}
          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition hover:bg-gray-50"
          style={{ color: PRIMARY_DK, borderColor: `${PRIMARY}30` }}
        >
          <Upload size={12} />
          Hochladen
        </button>
      }
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        onChange={handleUpload}
        className="hidden"
      />

      {documents.length === 0 ? (
        <EmptyLine text="Ihre hochgeladenen Rezepte und Dokumente erscheinen hier." />
      ) : (
        <ul className="flex flex-col gap-2">
          {documents.map((doc) => (
            <DocumentRow key={doc.id} doc={doc} onDelete={() => handleDelete(doc.id)} />
          ))}
        </ul>
      )}

      <Link to="/rezept-einloesen" className="block no-underline mt-3">
        <Button variant="outline" className="w-full gap-2 font-semibold">
          <Upload size={16} />
          Neues Rezept einlösen
        </Button>
      </Link>
    </SectionCard>
  )
}

function DocumentRow({ doc, onDelete }: { doc: DocumentRecord; onDelete: () => void }) {
  const Icon = doc.type === 'image' ? FileImage : FileText
  const kindColor: Record<DocumentRecord['kind'], string> = {
    Rezept: '#2E8EAD',
    Arztbrief: '#7C4DFF',
    Versicherung: '#3DB46A',
    Sonstiges: '#6B7B8A',
  }
  return (
    <li
      className="flex items-center gap-3 p-3 rounded-xl border bg-white/60"
      style={{ borderColor: '#E6EEF2' }}
    >
      <span
        className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
        style={{ backgroundColor: `${kindColor[doc.kind]}15`, color: kindColor[doc.kind] }}
      >
        <Icon size={18} />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">{doc.name}</p>
        <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-gray-500">
          <span
            className="inline-flex items-center px-1.5 py-0.5 rounded-full font-semibold"
            style={{ backgroundColor: `${kindColor[doc.kind]}15`, color: kindColor[doc.kind] }}
          >
            {doc.kind}
          </span>
          <span>· {doc.sizeKb} KB</span>
          <span>· {doc.uploadedAt}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          /* TODO: download from Supabase Storage */
        }}
        aria-label="Herunterladen"
        className="flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
      >
        <Download size={15} />
      </button>
      <button
        type="button"
        onClick={onDelete}
        aria-label="Löschen"
        className="flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition"
      >
        <Trash2 size={15} />
      </button>
    </li>
  )
}

// ─── Feedback ─────────────────────────────────────────────────────────────────
const FEEDBACK_QUESTIONS: Array<{ key: keyof FeedbackRecord; question: string }> = [
  { key: 'is_in_good_condition', question: FEEDBACK_QUESTIONS_FULL[0] },
  { key: 'has_changes', question: FEEDBACK_QUESTIONS_FULL[1] },
  { key: 'is_used_regularly', question: FEEDBACK_QUESTIONS_FULL[2] },
]

function FeedbackCard({
  feedback,
  company,
  aufId,
  onSave,
}: {
  feedback: FeedbackRecord | null
  company: Company
  aufId: string
  onSave: (updates: Partial<FeedbackRecord>) => Promise<void>
}) {
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [draft, setDraft] = useState<FeedbackRecord>({
    satisfaction_level: feedback?.satisfaction_level ?? 5,
    is_in_good_condition: feedback?.is_in_good_condition ?? null,
    has_changes: feedback?.has_changes ?? null,
    is_used_regularly: feedback?.is_used_regularly ?? null,
    comments: feedback?.comments ?? null,
  })

  function openEdit() {
    setDraft({
      satisfaction_level: feedback?.satisfaction_level ?? 5,
      is_in_good_condition: feedback?.is_in_good_condition ?? null,
      has_changes: feedback?.has_changes ?? null,
      is_used_regularly: feedback?.is_used_regularly ?? null,
      comments: feedback?.comments ?? null,
    })
    setEditing(true)
  }

  async function handleSave() {
    setSaving(true)
    try {
      await onSave(draft)
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  if (editing) {
    return (
      <SectionCard icon={<Star size={18} style={{ color: PRIMARY }} />} title="Feedback bearbeiten" subtitle="Ihre Rückmeldung">
        <div className="flex flex-col gap-4">
          <div>
            <Label className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-1.5">
              Zufriedenheit
            </Label>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => {
                const active = i < (draft.satisfaction_level ?? 0)
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, satisfaction_level: i + 1 }))}
                    className="p-0.5 transition active:scale-95"
                    aria-label={`${i + 1} Sterne`}
                  >
                    <Star
                      size={26}
                      fill={active ? STAR_GOLD : 'transparent'}
                      stroke={active ? STAR_GOLD : '#C4CED4'}
                      strokeWidth={1.5}
                    />
                  </button>
                )
              })}
              <span className="ml-1 text-sm font-semibold text-gray-700">{draft.satisfaction_level ?? 0}/5</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {FEEDBACK_QUESTIONS.map((q) => (
              <div key={q.key} className="flex items-center justify-between gap-3">
                <p className="text-sm text-gray-700 leading-snug flex-1">{q.question}</p>
                <YesNoToggle
                  value={draft[q.key] as boolean | null}
                  onChange={(v) => setDraft((d) => ({ ...d, [q.key]: v }))}
                />
              </div>
            ))}
          </div>

          <div>
            <Label className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-1">
              Kommentar (optional)
            </Label>
            <Textarea
              value={draft.comments ?? ''}
              onChange={(e) => setDraft((d) => ({ ...d, comments: e.target.value || null }))}
              placeholder="Haben Sie weitere Anmerkungen?"
              className="text-sm min-h-[72px]"
            />
          </div>

          <EditFormActions onSave={handleSave} onCancel={() => setEditing(false)} saving={saving} />
        </div>
      </SectionCard>
    )
  }

  if (!feedback) {
    return (
      <SectionCard
        icon={<Star size={18} style={{ color: PRIMARY }} />}
        title="Feedback"
        subtitle="Noch keine Rückmeldung"
        action={<EditIconButton onClick={openEdit} label="Hinzufügen" />}
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          Ihre Rückmeldung hilft uns, Ihre Versorgung kontinuierlich zu verbessern.
        </p>
        <Link
          to={`/qr/${company}/${aufId}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: PRIMARY_DK }}
        >
          Zum Feedback-Formular
          <ChevronRight size={14} />
        </Link>
      </SectionCard>
    )
  }

  const rating = feedback.satisfaction_level ?? 0
  const answers: Array<{ question: string; value: boolean | null }> = FEEDBACK_QUESTIONS.map((q) => ({
    question: q.question,
    value: feedback[q.key] as boolean | null,
  }))

  return (
    <SectionCard
      icon={<Star size={18} style={{ color: PRIMARY }} />}
      title="Letztes Feedback"
      subtitle="Ihre Antworten"
      action={<EditIconButton onClick={openEdit} />}
    >
      <div
        className="flex items-center justify-between gap-3 mb-3 p-3 rounded-xl"
        style={{ backgroundColor: '#FFF8E1' }}
      >
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-600">Zufriedenheit</span>
          <span className="text-base font-bold text-gray-900">{rating} von 5</span>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? STAR_GOLD : 'transparent'}
              stroke={i < rating ? STAR_GOLD : '#D1D9DF'}
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>

      <ul className="flex flex-col gap-1.5">
        {answers.map((a, i) => (
          <FeedbackAnswerRow key={i} question={a.question} value={a.value} />
        ))}
      </ul>

      {feedback.comments && (
        <div className="mt-3 p-3 rounded-xl border" style={{ borderColor: '#E6EEF2', backgroundColor: '#FAFBFC' }}>
          <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-1">Kommentar</p>
          <p className="text-sm text-gray-700 leading-relaxed">{feedback.comments}</p>
        </div>
      )}
    </SectionCard>
  )
}

function YesNoToggle({
  value,
  onChange,
}: {
  value: boolean | null
  onChange: (v: boolean) => void
}) {
  return (
    <div className="inline-flex rounded-lg overflow-hidden border flex-shrink-0" style={{ borderColor: '#E6EEF2' }}>
      {(['yes', 'no'] as const).map((opt) => {
        const isYes = opt === 'yes'
        const active = value === isYes
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(isYes)}
            className={cn(
              'px-3 h-8 text-xs font-semibold transition',
              active ? 'text-white' : 'text-gray-600 bg-white hover:bg-gray-50',
            )}
            style={{ backgroundColor: active ? (isYes ? SUCCESS : '#D44A4A') : undefined }}
          >
            {isYes ? 'Ja' : 'Nein'}
          </button>
        )
      })}
    </div>
  )
}

function FeedbackAnswerRow({ question, value }: { question: string; value: boolean | null }) {
  const unanswered = value === null
  const isYes = value === true

  return (
    <li className="flex items-start justify-between gap-2 text-sm">
      <p className="text-gray-700 leading-snug flex-1">{question}</p>
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold flex-shrink-0"
        style={{
          backgroundColor: unanswered ? '#F1F4F6' : isYes ? `${SUCCESS}15` : '#FDEDED',
          color: unanswered ? '#6B7B8A' : isYes ? '#216E3F' : '#8A2A2A',
        }}
      >
        {unanswered ? '—' : isYes ? (
          <><Check size={10} strokeWidth={3} /> Ja</>
        ) : (
          <><AlertCircle size={10} strokeWidth={3} /> Nein</>
        )}
      </span>
    </li>
  )
}

// ─── Generic section card ─────────────────────────────────────────────────────
function SectionCard({
  icon,
  title,
  subtitle,
  action,
  children,
}: {
  icon: React.ReactNode
  title: string
  subtitle?: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="bg-white rounded-2xl p-4 sm:p-5 border border-black/5 shadow-[0_2px_12px_rgba(36,114,139,0.06)]">
      <div className="flex items-start gap-3 mb-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
          style={{ backgroundColor: `${PRIMARY}12` }}
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">{title}</h2>
          {subtitle && <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
      {children}
    </section>
  )
}

function EditIconButton({ onClick, label = 'Bearbeiten' }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition hover:bg-gray-50"
      style={{ color: PRIMARY_DK, borderColor: `${PRIMARY}30` }}
      aria-label={label}
    >
      <Pencil size={12} />
      {label}
    </button>
  )
}

function EditFormActions({
  onSave,
  onCancel,
  saving,
}: {
  onSave: () => void
  onCancel: () => void
  saving: boolean
}) {
  return (
    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
        disabled={saving}
        className="gap-1.5 flex-1 sm:flex-initial"
      >
        <X size={14} />
        Abbrechen
      </Button>
      <Button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="gap-1.5 flex-1 sm:flex-initial"
        style={{ backgroundColor: PRIMARY, color: 'white' }}
      >
        {saving ? (
          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Check size={14} />
        )}
        Speichern
      </Button>
    </div>
  )
}

// ─── Info field (for Stammdaten) ──────────────────────────────────────────────
function InfoField({
  label,
  value,
  icon,
  href,
  full,
}: {
  label: string
  value: string | null
  icon?: React.ReactNode
  href?: string
  full?: boolean
}) {
  const content = (
    <>
      <dt className="text-[11px] uppercase tracking-wider font-semibold text-gray-500 mb-0.5 flex items-center gap-1.5">
        {icon && <span className="text-gray-400">{icon}</span>}
        {label}
      </dt>
      <dd className={cn('text-sm font-semibold text-gray-900', !value && 'text-gray-400 italic font-normal')}>
        {value || 'Nicht hinterlegt'}
      </dd>
    </>
  )

  if (href && value) {
    return (
      <a href={href} className={cn('block no-underline hover:opacity-80 transition', full && 'sm:col-span-2')}>
        {content}
      </a>
    )
  }
  return <div className={cn(full && 'sm:col-span-2')}>{content}</div>
}

function EmptyLine({ text }: { text: string }) {
  return <p className="text-sm text-gray-500 italic">{text}</p>
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function toTitleCase(s: string) {
  return s
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}
