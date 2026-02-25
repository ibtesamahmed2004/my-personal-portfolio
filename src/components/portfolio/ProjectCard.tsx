import { BadgePill } from "@/components/portfolio/BadgePill";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  tags: string[];
  href?: string;
  logoUrl?: string;
  className?: string;
};

function initials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function ProjectCard({ title, subtitle, tags, href, logoUrl, className }: Props) {
  return (
    <div
      className={cn(
        "lux-glass group relative overflow-hidden rounded-xl p-6 transition-transform duration-300 will-change-transform hover:-translate-y-1",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-card/40 shadow-[var(--shadow-soft)]">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={`${title} logo`}
                loading="lazy"
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <span className="lux-font-sans text-[11px] font-semibold tracking-[0.28em] lux-text-gold">
                {initials(title)}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="lux-font-serif text-xl font-semibold tracking-tight text-hero-foreground">{title}</h3>
            <p className="lux-font-sans mt-2 text-sm leading-relaxed text-ink-muted">{subtitle}</p>
          </div>

          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/30 text-ink-muted transition hover:text-hero-foreground"
              aria-label={`Open ${title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <BadgePill key={t}>{t}</BadgePill>
          ))}
        </div>
      </div>
    </div>
  );
}
