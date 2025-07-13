import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: 'never',
  domains: [
    {
      domain: "clementlbn.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "fr.clementlbn.com",
      defaultLocale: "fr",
      locales: ["fr"],
    },
  ],
});
