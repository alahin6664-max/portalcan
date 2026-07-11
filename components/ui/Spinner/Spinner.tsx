import { cn } from "@/lib/utils";
import { SpinnerProps } from "./Spinner.types";
import { baseStyles } from "./Spinner.styles";

export function Spinner({
  className,
}: SpinnerProps) {
  return (
    <div className={cn(baseStyles, className)} />
  );
}