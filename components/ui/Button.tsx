import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium transition-colors",
        variant === "primary" &&
          "bg-primary text-white hover:opacity-90",
        variant === "ghost" &&
          "bg-transparent hover:bg-muted",
        className
      )}
      {...props}
    />
  );
}