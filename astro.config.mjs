import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  // Production URL for SEO (updates canonical URLs & OG tags)
  site: "https://best-rgb-controller.com/",
  integrations: [tailwind(), icon()],
});
