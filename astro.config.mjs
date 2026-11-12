// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://justicesystemsinitiative.org",
  base: process.env.SITE_BASE_PATH || "/",
  integrations: [
    sitemap({
      // the board portal is a private short link; keep it out of search
      filter: (page) => !page.includes("/boardportal"),
    }),
  ],
});
