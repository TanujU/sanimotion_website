/*
 * shadcn-style Button — minimal port of the API used by the patient
 * dashboard. Kept under ~/components/ui (lowercase filename) to mirror
 * feedback-app naming and stay distinct from ~/components/primitives/Button.
 */
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/cn";

type Variant = "default" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default:
    "bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60",
  outline:
    "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 disabled:opacity-60",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-60",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", type = "button", ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black/10",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    />
  ),
);
Button.displayName = "Button";
