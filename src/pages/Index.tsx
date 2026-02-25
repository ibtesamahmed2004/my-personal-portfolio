import SplashCursor from "@/components/portfolio/SplashCursor";
import { LuxNavbar } from "@/components/portfolio/LuxNavbar";
import { BadgePill } from "@/components/portfolio/BadgePill";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { VideoSection } from "@/components/portfolio/VideoSection";
import {
  ABOUT,
  CERTIFICATIONS,
  CONTACT,
  EXPERIENCE,
  JOURNEY,
  PROFILE,
  PROJECTS,
  SECTION_VIDEOS,
  SKILL_GROUPS,
} from "@/components/portfolio/sections-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  useEffect(() => {
    // Lightweight SEO (without touching index.html)
    document.title = "Mohammad Ibtesam Ahmed — AI, Data & Systems";
    const ensure = (name: string, content: string) => {
      let el = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    ensure(
      "description",
      "Mohammad Ibtesam Ahmed — Software Developer, AI Systems Explorer, and Data Scientist building intelligent systems, automation, and scalable data products.",
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashCursor />
      <LuxNavbar />

      <main className="pt-24">
        {/* HOME */}
        <VideoSection id="home" videoSrc={SECTION_VIDEOS.home} className="min-h-[92vh]">
          <div className="ml-[5px] md:pl-10 lg:pl-14">
            <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="lux-font-sans text-xs tracking-[0.30em] text-ink-muted uppercase">Personal Brand Portfolio</p>
              <h1 className="lux-font-serif mt-4 text-4xl font-semibold leading-[1.10] tracking-[-0.02em] text-hero-foreground md:text-6xl">
                <span className="block">{PROFILE.name}</span>
              </h1>

              <p className="lux-font-sans mt-5 text-sm leading-relaxed text-ink-muted md:text-base">{PROFILE.roleLine}</p>

              <p className="lux-font-serif mt-8 text-[44px] font-bold leading-[1.15] tracking-[-0.01em] text-hero-foreground md:text-[58px]">
                <span className="lux-text-gold">{PROFILE.mainMessage}</span>
              </p>
              <p className="lux-font-sans mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                {PROFILE.subtext}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Work <ArrowRight className="ml-1" />
                </Button>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact <Mail className="ml-1" />
                </Button>
              </div>

              <div className="mt-10">
                <p className="lux-font-sans text-xs tracking-[0.24em] text-ink-muted uppercase">Headline</p>
                <p className="mt-3">
                  <span className="lux-font-serif text-2xl font-extrabold tracking-[0.12em] text-hero-foreground uppercase md:text-3xl">
                    Shaping the Future
                  </span>{" "}
                  <span className="lux-font-sans text-xl font-semibold tracking-tight text-ink-muted md:text-2xl">
                    with AI, Data Science, and Seamless Automation
                  </span>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="lux-glass lux-section-frame mx-auto w-full max-w-sm rounded-3xl p-5 md:max-w-md">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 lux-gradient-ink" />
                  <div className="absolute inset-0 opacity-70" />
                  <div className="relative flex flex-col items-center gap-4 p-7">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQHhfa6kUpr3wA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1679304965763?e=1773273600&v=beta&t=GOFic2fLkCq_XxodVAx81P718tmQGjv3SY6CcI_huM4"
                      alt="Portrait of Mohammad Ibtesam Ahmed"
                      loading="lazy"
                      className="h-28 w-28 rounded-full border border-border/70 object-cover shadow-[var(--shadow-elevated)]"
                    />
                    <div className="text-center">
                      <p className="lux-font-serif text-xl font-semibold text-hero-foreground">{PROFILE.name}</p>
                      <p className="lux-font-sans mt-2 text-sm text-ink-muted">Systems-first engineering. AI-forward delivery.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <BadgePill>AI Systems</BadgePill>
                      <BadgePill>Automation</BadgePill>
                      <BadgePill>Data Products</BadgePill>
                      <BadgePill>Security</BadgePill>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -left-10 -top-10 hidden h-40 w-40 rounded-full bg-primary/10 blur-3xl md:block" />
              <div className="pointer-events-none absolute -bottom-16 -right-14 hidden h-56 w-56 rounded-full bg-primary/10 blur-3xl md:block" />
            </div>
            </div>
          </div>
        </VideoSection>

        {/* ABOUT */}
        <VideoSection id="about" videoSrc={SECTION_VIDEOS.about} eyebrow="About" title="About">
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-5">
            {/* Left column: ONLY the intro text */}
            <div className="lux-glass rounded-2xl p-7 md:p-8">
              <p className="lux-font-serif text-2xl font-semibold tracking-tight text-hero-foreground md:text-3xl">{ABOUT.title}</p>
              {ABOUT.body.map((p) => (
                <p key={p} className="lux-font-sans mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
                  {p}
                </p>
              ))}

              {!!ABOUT.quotes?.length && (
                <div className="mt-7 grid gap-4">
                  {ABOUT.quotes.map((q) => (
                    <figure key={`${q.author}-${q.text}`} className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5">
                      <blockquote className="lux-font-serif text-lg italic leading-relaxed text-hero-foreground md:text-xl">
                        {q.text}
                      </blockquote>
                      <figcaption className="lux-font-sans mt-3 text-sm tracking-wide text-ink-muted">{q.author}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>

            {/* Right column: ALL remaining About blocks */}
            <div className="grid gap-4">
              {ABOUT.blocks.map((b) => (
                <div key={b.title} className="lux-glass rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-primary/15 p-2">
                      <b.icon className="h-5 w-5 text-hero-foreground" />
                    </div>
                    <div>
                      <p className="lux-font-serif text-lg font-semibold text-hero-foreground">{b.title}</p>
                      <p className="lux-font-sans mt-2 text-sm leading-relaxed text-ink-muted whitespace-pre-line">{b.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VideoSection>

        {/* JOURNEY */}
        <VideoSection id="journey" videoSrc={SECTION_VIDEOS.journey} eyebrow="Journey" title="Education & Growth">
          <div className="grid gap-4">
            {JOURNEY.map((j) => (
              <div key={`${j.title}-${j.duration}`} className="lux-glass rounded-2xl p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    {j.logoUrl ? (
                      <img
                        src={j.logoUrl}
                        alt={`${j.org} logo`}
                        loading="lazy"
                        className="h-12 w-12 rounded-xl border border-border/70 bg-transparent object-contain"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-xl border border-border/70 bg-card/30" />
                    )}
                    <div>
                      <p className="lux-font-serif text-lg font-semibold text-hero-foreground">{j.title}</p>
                      <p className="lux-font-sans mt-1 text-sm text-ink-muted">{j.org}</p>
                    </div>
                  </div>
                  <BadgePill>{j.duration}</BadgePill>
                </div>
                <ul className="mt-4 grid gap-2 md:grid-cols-2">
                  {j.highlights.map((h) => (
                    <li key={h} className="lux-font-sans text-sm text-ink-muted">
                      • {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </VideoSection>

        {/* SKILLS */}
        <VideoSection id="skills" videoSrc={SECTION_VIDEOS.skills} eyebrow="Skills" title="Capabilities">
          <div className="grid gap-4 md:grid-cols-2">
            {SKILL_GROUPS.map((g) => (
              <div key={g.title} className="lux-glass rounded-2xl p-6">
                <p className="lux-font-serif text-lg font-semibold text-hero-foreground">{g.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <BadgePill key={i}>{i}</BadgePill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </VideoSection>

        {/* PROJECTS */}
        <VideoSection id="projects" videoSrc={SECTION_VIDEOS.projects} eyebrow="Projects" title="Selected Work">
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.featured.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                tags={p.tags}
                href={p.href}
                logoUrl={p.logoUrl}
              />
            ))}
          </div>

          <div className="mt-8 lux-glass rounded-2xl p-6">
            <p className="lux-font-sans text-xs tracking-[0.24em] text-ink-muted uppercase">Additional</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {PROJECTS.extra.map((p) => (
                  <ProjectCard
                    key={p.title}
                    title={p.title}
                    subtitle={p.subtitle}
                    tags={p.tags}
                    href={p.href}
                    logoUrl={p.logoUrl}
                  />
              ))}
            </div>
          </div>
        </VideoSection>

        {/* CERTIFICATIONS */}
        <VideoSection id="certifications" videoSrc={SECTION_VIDEOS.certifications} eyebrow="Certifications" title="Licenses & Certifications">
          <div className="grid gap-4">
            {CERTIFICATIONS.map((group) => (
              <div key={group.group} className="lux-glass rounded-2xl p-6">
                <p className="lux-font-serif text-lg font-semibold text-hero-foreground">{group.group}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {group.items.map((c) => (
                    <div
                      key={c.title}
                      className="lux-glass group rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-card/40 shadow-[var(--shadow-soft)]">
                          <img
                            src={c.logoUrl}
                            alt={`${c.org} logo`}
                            loading="lazy"
                            className="h-full w-full object-contain p-2"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="lux-font-sans text-sm font-medium text-hero-foreground">{c.title}</p>
                          <p className="lux-font-sans mt-1 text-xs text-ink-muted">{c.org}</p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {c.links.map((l) => (
                              <Button key={l.href} asChild variant="hero" size="sm">
                                <a href={l.href} target="_blank" rel="noreferrer">
                                  {l.label} <ExternalLink className="ml-1 h-4 w-4" />
                                </a>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </VideoSection>

        {/* EXPERIENCE */}
        <VideoSection id="experience" videoSrc={SECTION_VIDEOS.experience} eyebrow="Experience" title="Professional Experience">
          <div className="lux-glass rounded-2xl p-7">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Fortinet logo"
                  loading="lazy"
                  className="h-12 w-12 rounded-xl border border-border/70 bg-card/30 object-cover"
                />
                <div>
                  <p className="lux-font-serif text-xl font-semibold text-hero-foreground">{EXPERIENCE.title}</p>
                  <p className="lux-font-sans mt-1 text-sm text-ink-muted">{EXPERIENCE.org}</p>
                  <p className="lux-font-sans mt-2 text-sm text-ink-muted">{EXPERIENCE.meta}</p>
                </div>
              </div>

              <div>
                <Button asChild variant="hero" size="lg">
                <a href={EXPERIENCE.credential} target="_blank" rel="noreferrer">
                  View Credential <ExternalLink className="ml-1" />
                </a>
                </Button>
              </div>
            </div>

            <p className="lux-font-sans mt-6 text-base leading-relaxed text-ink-muted">{EXPERIENCE.body}</p>
            <ul className="mt-5 grid gap-2 md:grid-cols-2">
              {EXPERIENCE.bullets.map((b) => (
                <li key={b} className="lux-font-sans text-sm text-ink-muted">
                  • {b}
                </li>
              ))}
            </ul>
          </div>
        </VideoSection>

        {/* RESUME */}
        <VideoSection id="resume" videoSrc={SECTION_VIDEOS.resume} eyebrow="Resume" title="Resume">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="lux-glass rounded-2xl p-7">
              <p className="lux-font-serif text-2xl font-semibold tracking-tight text-hero-foreground">Download or Preview</p>
              <p className="lux-font-sans mt-3 text-base leading-relaxed text-ink-muted">
                Your PDF is hosted directly in this site for fast access. Use the buttons below or scroll the embedded preview.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="premium" size="xl">
                  <a href="/resume/Mohammad_Ibtesam_Ahmed_resume_4.pdf" download>
                    Download PDF <Download className="ml-1" />
                  </a>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <a href="/resume/Mohammad_Ibtesam_Ahmed_resume_4.pdf" target="_blank" rel="noreferrer">
                    Open in New Tab <ExternalLink className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lux-glass overflow-hidden rounded-2xl">
              <iframe
                title="Resume Preview"
                src="/resume/Mohammad_Ibtesam_Ahmed_resume_4.pdf#view=FitH"
                className="h-[520px] w-full"
              />
            </div>
          </div>
        </VideoSection>

        {/* CONTACT */}
        <VideoSection id="contact" videoSrc={SECTION_VIDEOS.contact} eyebrow="Contact" title="Let’s build something resilient">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <div className="lux-glass rounded-2xl p-7">
              <p className="lux-font-serif text-2xl font-semibold text-hero-foreground">Start a conversation</p>
              <p className="lux-font-sans mt-3 text-base leading-relaxed text-ink-muted">
                If you’re designing a product, automating processes, or exploring generative AI in production—let’s collaborate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="premium" size="xl">
                  <a href={`mailto:${CONTACT.email}`}>
                    Email <Mail className="ml-1" />
                  </a>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn <Linkedin className="ml-1" />
                  </a>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <a href={CONTACT.github} target="_blank" rel="noreferrer">
                    GitHub <Github className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lux-glass rounded-2xl p-7">
              <p className="lux-font-sans text-xs tracking-[0.24em] text-ink-muted uppercase">Links</p>
              <div className="mt-4 grid gap-3">
                <a className="lux-glass rounded-xl p-4 text-ink-muted hover:text-hero-foreground" href={CONTACT.x} target="_blank" rel="noreferrer">
                  X (Twitter)
                </a>
                <a
                  className="lux-glass rounded-xl p-4 text-ink-muted hover:text-hero-foreground"
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="lux-glass rounded-xl p-4 text-ink-muted hover:text-hero-foreground"
                  href={CONTACT.snapchat}
                  target="_blank"
                  rel="noreferrer"
                >
                  Snapchat
                </a>
                <a
                  className="lux-glass rounded-xl p-4 text-ink-muted hover:text-hero-foreground"
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="lux-font-sans text-sm text-ink-muted">© {new Date().getFullYear()} {PROFILE.name}. Built with precision.</p>
              </div>
            </div>
          </div>
        </VideoSection>
      </main>
    </div>
  );
};

export default Index;
