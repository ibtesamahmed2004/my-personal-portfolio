import { NAV, type SectionId } from "@/components/portfolio/sections-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

function useActiveSection(ids: SectionId[]) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const offset = 110; // navbar + breathing room
    let raf = 0;

    const getEls = () =>
      ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

    const compute = () => {
      raf = 0;
      const els = getEls();
      if (!els.length) return;

      // Prefer the section that spans the offset line.
      let current: SectionId | undefined;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.top <= offset && r.bottom > offset) {
          current = el.id as SectionId;
          break;
        }
      }

      // If no section spans the offset line (rare), pick the closest section above it.
      if (!current) {
        let bestTop = -Infinity;
        for (const el of els) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset && top > bestTop) {
            bestTop = top;
            current = el.id as SectionId;
          }
        }
      }

      // If we're above the first section, default to the first.
      if (!current) current = (els[0].id as SectionId) ?? "home";

      setActive((prev) => (prev === current ? prev : current));
    };

    const onChange = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(compute);
    };

    // Initial
    compute();
    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, [ids]);

  return active;
}

export function LuxNavbar() {
  const ids = useMemo(() => NAV.map((n) => n.id), []);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top - 76, behavior: "smooth" });
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-6 pt-4">
        <div className="flex items-stretch gap-4">
          {/* Premium wordmark aligned with the navbar bar */}
          <button
            onClick={() => scrollTo("home")}
            className={cn(
              "group inline-flex items-center rounded-xl px-2",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            aria-label="Go to Home"
          >
            <span
              className={cn(
                "lux-font-serif",
                "text-[13px] md:text-sm",
                "font-extrabold",
                "tracking-[0.34em]",
                "uppercase",
                "lux-text-gold",
                "drop-shadow-[0_10px_22px_hsl(var(--gold)_/_0.22)]",
                "transition-opacity group-hover:opacity-95",
              )}
            >
              MIA
            </span>
          </button>

          <div className="min-w-0 flex-1">
            <div className="lux-glass border-foreground/10 flex items-center justify-between rounded-2xl px-3 py-3">
              <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "lux-font-sans rounded-full border px-3 py-2 text-xs tracking-[0.18em] uppercase transition",
                      active === item.id
                        ? "border-foreground/15 bg-foreground/10 text-hero-foreground shadow-[var(--shadow-soft)]"
                        : "border-transparent text-ink-muted hover:border-foreground/10 hover:bg-accent/40 hover:text-hero-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <Button
                  variant="premium"
                  size="sm"
                  className="hidden md:inline-flex"
                  onClick={() => scrollTo("contact")}
                >
                  Let’s Collaborate
                </Button>

                <button
                  className="md:hidden"
                  aria-label={open ? "Close menu" : "Open menu"}
                  onClick={() => setOpen((v) => !v)}
                >
                  <span className="sr-only">Menu</span>
                  {open ? (
                    <X className="h-5 w-5 text-hero-foreground" />
                  ) : (
                    <Menu className="h-5 w-5 text-hero-foreground" />
                  )}
                </button>
              </div>
            </div>

            {open && (
              <div className="lux-glass border-foreground/10 mt-3 rounded-2xl p-2 md:hidden">
                <div className="grid grid-cols-2 gap-2">
                  {NAV.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setOpen(false);
                        scrollTo(item.id);
                      }}
                      className={cn(
                        "lux-font-sans flex items-center gap-2 rounded-xl border px-3 py-3 text-xs tracking-[0.16em] uppercase",
                        active === item.id
                          ? "border-foreground/15 bg-foreground/10 text-hero-foreground"
                          : "border-transparent text-ink-muted hover:border-foreground/10 hover:bg-accent/40 hover:text-hero-foreground",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
