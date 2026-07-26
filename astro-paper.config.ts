import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://astro-paper.pages.dev/",
    title: "Elliott Lambert",
    description: "My personal blog and portfolio.",
    author: "Elliott Lambert",
    profile: "https://satna.ing",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "GMT",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/Elambert94" },
    { name: "linkedin", url: "https://www.linkedin.com/in/elliott-lambert-b8634699" },
    { name: "mail",     url: "mailto:ehlambert1994@gmail.com" },
  ],
  shareLinks: [
    { name: "mail",     url: "mailto:ehlambert1994@gmail.com?subject=See%20this%20post&body=" },
  ],
});
