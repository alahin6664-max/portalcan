import { cn } from "@/lib/utils";
import { TextProps } from "./Text.types";
import {
  baseStyles,
  defaultStyles,
  mutedStyles,
} from "./Text.styles";

export function Text({
  muted = false,
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        baseStyles,
        muted ? mutedStyles : defaultStyles,
        className
      )}
      {...props}
    />
  );
}