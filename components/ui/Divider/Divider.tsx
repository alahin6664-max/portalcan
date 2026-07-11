import { cn } from "@/lib/utils";
import { DividerProps } from "./Divider.types";
import { baseStyles } from "./Divider.styles";

export function Divider({
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(baseStyles, className)}
      {...props}
    />
  );
}