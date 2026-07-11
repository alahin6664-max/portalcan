import { ButtonProps } from "./Button.types";
import { baseStyles, sizes, variants } from "./Button.styles";
import { cn } from "@/lib/utils";

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
}