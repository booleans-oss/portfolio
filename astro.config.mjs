import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

export default defineConfig({
  integrations: [tailwind(), react(), astroI18next()],
  output: "static",
  adapter: vercel({
    analytics: true
  }),
});