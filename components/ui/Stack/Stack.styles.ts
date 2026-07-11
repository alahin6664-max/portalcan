import { StackGap } from "./Stack.types";

export const baseStyles =
  "flex flex-col";

export const gaps: Record<StackGap, string> = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-10",
};