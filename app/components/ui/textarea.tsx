import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "~/lib/cn";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...rest }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-400",
      "border-gray-200 disabled:opacity-60",
      className,
    )}
    {...rest}
  />
));
Textarea.displayName = "Textarea";
