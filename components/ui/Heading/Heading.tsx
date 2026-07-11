import { ElementType } from "react";
import { cn } from "@/lib/utils";
import { HeadingProps } from "./Heading.types";

export function Heading({
  title,
  subtitle,
  level = 2,
  centered = false,
  className,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  return (
    <div
      className={cn(centered && "text-center", className)}
      {...props}
    >
      <Tag className="font-heading text-4xl font-bold tracking-tight">
        {title}
      </Tag>

      {subtitle && (
        <p className="mt-4 text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}