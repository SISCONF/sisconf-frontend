import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";
import { typographyVariants } from "./typography-variants";

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
} as const;

export function Typography({
  children,
  className,
  variant = "h4",
  fontWeight,
  textColor,
  as,
  ...props
}: TypographyProps) {
  const validVariant = variant ?? "h4";
  const Tag: ElementType =
    as || tags[validVariant as keyof typeof tags] || "span";

  return (
    <Tag
      data-testid="typography-container"
      className={cn(
        typographyVariants({ variant, fontWeight, textColor }),
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
