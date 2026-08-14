// @ts-nocheck
import { cn } from "@/lib/utils";

export default function Badge({ children, className, ...props }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-sage-400/30 px-3 py-1 text-xs font-medium text-ink-800",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}