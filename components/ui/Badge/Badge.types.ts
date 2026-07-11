import { HTMLAttributes } from "react";

export type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "error";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}