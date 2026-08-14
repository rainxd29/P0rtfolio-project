// @ts-nocheck
import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, className, align = "left" }) {
  return (
    <div className={cn("mb-10 max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-ink-700">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold text-ink-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-ink-700">{description}</p>}
    </div>
  );
}