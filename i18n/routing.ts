import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: 'never',
  domains: [
    {
      domain: "clement.best",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "fr.clement.best",
      defaultLocale: "fr",
      locales: ["fr"],
    },
  ],
});
