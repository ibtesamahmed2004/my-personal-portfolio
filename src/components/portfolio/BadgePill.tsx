import { cn } from "@/lib/utils";

export function BadgePill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "lux-font-sans inline-flex items-center rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs tracking-wide text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
