import { ButtonSize, ButtonVariant } from "./Button.types";

export const baseStyles =
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

export const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-600",

  secondary:
    "bg-surface text-text hover:bg-card",

  outline:
    "border border-border bg-transparent text-text hover:bg-surface",

  ghost:
    "bg-transparent text-text hover:bg-surface",

  danger:
    "bg-error text-white hover:opacity-90",
};

export const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-lg",
};