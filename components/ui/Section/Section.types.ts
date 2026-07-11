import { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}