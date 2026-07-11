import { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  centered?: boolean;
}