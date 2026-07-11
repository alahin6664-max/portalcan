import { cn } from "@/lib/utils";
import { BadgeProps } from "./Badge.types";
import { baseStyles, variants } from "./Badge.styles";

export function Badge({
  variant = "primary",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    />
  );
}