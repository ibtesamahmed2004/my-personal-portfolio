import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  id: string;
  videoSrc: string;
  /** Optional poster for mobile browsers that delay autoplay. */
  posterSrc?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function VideoSection({ id, videoSrc, posterSrc, title, eyebrow, children, className }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  // Only play background video when the section is near/inside viewport.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setIsActive(entry.isIntersecting);
      },
      {
        // Activate a bit before fully entering to keep scrolling silky.
        root: null,
        rootMargin: "220px 0px 220px 0px",
        threshold: 0.01,
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const v = videoRef.current;
    if (!v) return;

    if (isActive) {
      // Autoplay may be blocked on some devices; ignore failure and keep poster/first frame.
      const p = v.play();
      if (p && typeof (p as Promise<void>).catch === "function") (p as Promise<void>).catch(() => {});
    } else {
      v.pause();
    }
  }, [isActive, prefersReducedMotion]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn("relative isolate overflow-hidden", className)}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "1px 900px",
        // Ensures in-page navigation/scrollTo doesn't land content under the fixed navbar.
        scrollMarginTop: 96,
      }}
    >
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload={prefersReducedMotion ? "none" : isActive ? "metadata" : "none"}
          disablePictureInPicture
          controls={false}
          aria-hidden="true"
        />
        <div className="absolute inset-0 lux-video-overlay" />
      </div>

      <div className="lux-noise">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 animate-fade-in">
          {(eyebrow || title) && (
            <header className="mb-10 md:mb-12">
              {eyebrow && (
                <p className="lux-font-sans text-sm tracking-[0.28em] text-ink-muted uppercase">{eyebrow}</p>
              )}
              {title && (
                <h2 className="lux-font-serif mt-3 text-3xl font-semibold tracking-tight text-hero-foreground md:text-4xl">
                  {title}
                </h2>
              )}
            </header>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
