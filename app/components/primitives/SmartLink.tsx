/*
 * SmartLink — a link primitive that decides RR7 <Link> vs <a>.
 *
 * What: For internal hrefs (start with "/"), uses RR7's client-side <Link>
 * for instant navigation. For everything else (mailto:, tel:, http://...),
 * falls back to a plain <a> with safe defaults (rel/target on externals).
 *
 * Why: Hand-coding the choice in every component is error-prone. One
 * primitive enforces correctness — and makes a future analytics hook
 * (track outbound clicks) a one-place change.
 */
import { Link } from "react-router";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type SmartLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  // Override external detection if needed (e.g. force same-window for /pdfs).
  forceExternal?: boolean;
  "aria-label"?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function isExternal(href: string): boolean {
  // Anything not starting with "/" or "#" is treated as external.
  return !/^[/#]/.test(href);
}

export function SmartLink({
  href,
  children,
  className,
  forceExternal,
  ...rest
}: SmartLinkProps) {
  const external = forceExternal ?? isExternal(href);

  if (external) {
    return (
      <a
        href={href}
        className={className}
        // Open external links in a new tab. noopener/noreferrer prevents the
        // new page from manipulating window.opener and leaking referrers.
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
