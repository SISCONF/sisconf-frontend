import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { typographyVariants } from "./typography-variants";

export interface TypographyGroupProps
  extends VariantProps<typeof typographyVariants>,
    ComponentProps<"span"> {
  children: ReactNode;
  className?: string;
}

export function Typography({
  children,
  className,
  variant,
  fontWeight,
  ...props
}: TypographyGroupProps) {
  return (
    <span
      data-testid="typography-container"
      className={cn(typographyVariants({ variant, fontWeight }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
