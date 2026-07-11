import { HTMLAttributes } from "react";

export type StackGap =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface StackProps
  extends HTMLAttributes<HTMLDivElement> {
  gap?: StackGap;
}