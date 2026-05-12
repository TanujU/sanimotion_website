import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "~/lib/cn";

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...rest }, ref) => (
    <label
      ref={ref}
      className={cn("block text-sm font-medium text-gray-700", className)}
      {...rest}
    />
  ),
);
Label.displayName = "Label";
