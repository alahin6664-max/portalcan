import { cn } from "@/lib/utils";
import { SectionProps } from "./Section.types";

export function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}