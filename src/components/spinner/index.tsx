import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export function Spinner({ size = "medium", className }: SpinnerProps = {}) {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-4 border-solid border-brand-3 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        {
          "h-4 w-4": size === "small",
          "h-8 w-8": size === "medium",
          "h-12 w-12": size === "large",
        },
        className
      )}
      role="status"
    ></div>
  );
}
