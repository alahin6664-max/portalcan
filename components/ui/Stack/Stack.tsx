import { cn } from "@/lib/utils";
import { StackProps } from "./Stack.types";
import { baseStyles, gaps } from "./Stack.styles";

export function Stack({
  gap = "md",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        baseStyles,
        gaps[gap],
        className
      )}
      {...props}
    />
  );
}