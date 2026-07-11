import { BadgeVariant } from "./Badge.types";

export const baseStyles =
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium";

export const variants: Record<BadgeVariant, string> = {
  primary: "bg-primary text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-black",
  error: "bg-error text-white",
};