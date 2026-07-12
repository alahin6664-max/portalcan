import { cn } from "@/lib/utils";
import { ContainerProps } from "./Container.types";
import { baseStyles } from "./Container.styles";

export function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(baseStyles, className)}
      {...props}
    />
  );
}