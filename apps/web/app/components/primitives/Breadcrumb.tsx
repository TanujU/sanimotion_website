import { ChevronRight } from "lucide-react";
import { SmartLink } from "./SmartLink";
import { Container } from "./Container";
import { cn } from "~/lib/cn";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("bg-canvas border-hairline mt-20 border-b lg:mt-24", className)}
    >
      <Container>
        <ol className="flex flex-wrap items-center gap-1 py-3 text-sm">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1">
                {i > 0 && (
                  <ChevronRight
                    size={13}
                    className="text-ink-subtle shrink-0"
                    aria-hidden
                  />
                )}
                {isLast ? (
                  <span
                    className="text-ink font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <SmartLink
                    href={item.path}
                    className="text-ink-muted hover:text-ink transition-colors duration-fast"
                  >
                    {item.name}
                  </SmartLink>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
