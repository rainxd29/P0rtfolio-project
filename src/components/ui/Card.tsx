// @ts-nocheck
import { cn } from "@/lib/utils";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white/60 backdrop-blur-sm p-6 shadow-sm ring-1 ring-ink-900/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}