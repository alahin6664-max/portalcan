import { HTMLAttributes } from "react";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  muted?: boolean;
}