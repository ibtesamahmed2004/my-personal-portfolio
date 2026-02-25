export type Project = {
  title: string;
  subtitle: string;
  tags: string[];
  /** Primary project link (live/demo/case study). */
  href?: string;
  /** Optional logo/icon URL (preferred). */
  logoUrl?: string;
};

const GH_PROFILE = "https://github.com/ibtesamahmed2004";

function ghRepoSearchHref(query: string) {
  const q = encodeURIComponent(query);
  return `${GH_PROFILE}?tab=repositories&q=${q}`;
}

export const PROJECTS: {
  featured: Project[];
  extra: Project[];
} = {
  featured: [
    {
      title: "PyConnect",
      subtitle: "Social Graph Intelligence System",
      tags: ["Python", "NetworkX", "Recommenders"],
      href: ghRepoSearchHref("PyConnect"),
    },
    {
      title: "Jarvis",
      subtitle: "Personal AI Assistant",
      tags: ["LLMs", "Automation", "NLP"],
      href: ghRepoSearchHref("Jarvis"),
    },
    {
      title: "GetMeAChai",
      subtitle: "Creator Support SaaS",
      tags: ["SaaS", "Payments", "Frontend"],
      href: ghRepoSearchHref("GetMeAChai"),
    },
    {
      title: "Vaultory",
      subtitle: "Secure Password Manager",
      tags: ["Security", "Encryption", "Full Stack"],
      href: ghRepoSearchHref("Vaultory"),
    },
    {
      title: "Secure URL Shortener",
      subtitle: "Full Stack App",
      tags: ["Security", "Analytics", "Web"],
      href: ghRepoSearchHref("URL Shortener"),
    },
  ],
  extra: [
    {
      title: "Handwritten AI Calculator",
      subtitle: "Vision + Math",
      tags: ["CV", "OCR", "ML"],
      href: ghRepoSearchHref("Handwritten"),
    },
    {
      title: "Goal Craft / Flowbit",
      subtitle: "Productivity System",
      tags: ["Automation", "UX", "Systems"],
      href: ghRepoSearchHref("Flowbit"),
    },
  ],
};
