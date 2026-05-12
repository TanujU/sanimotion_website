// Validates a `return_to` value against an allow-list to prevent open
// redirects. Accepts relative paths (always safe) and absolute URLs whose
// hostname matches sanimotion.com or any *.sanimotion.com subdomain.
// Dev hosts (localhost, 127.0.0.1) are allowed so local cross-app flows work.
const allowedDevHosts = new Set(["localhost", "127.0.0.1"]);

export function validateReturnTo(
  returnTo: string | null | undefined,
  fallback = "/",
): string {
  if (!returnTo) return fallback;
  if (returnTo.startsWith("/") && !returnTo.startsWith("//")) return returnTo;
  try {
    const url = new URL(returnTo);
    if (
      url.hostname === "sanimotion.com" ||
      url.hostname.endsWith(".sanimotion.com") ||
      allowedDevHosts.has(url.hostname)
    ) {
      return url.pathname + url.search + url.hash;
    }
  } catch {
    /* fall through to fallback */
  }
  return fallback;
}
