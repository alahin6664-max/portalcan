import { cn } from "@/lib/utils";
import { CardProps } from "./Card.types";
import { baseStyles } from "./Card.styles";

export function Card({
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(baseStyles, className)}
      {...props}
    />
  );
}