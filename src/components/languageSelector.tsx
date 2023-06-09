import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useMemo } from "react";

export default function LanguageSelector({ onChange }: { onChange?: (newValue: string) => void}) {
  const { i18n } = useTranslation();

  const onValueChange = onChange ?? ((newValue: string) => {
    window.location.href = newValue === "en" ? "/" : "/fr";
  });

  const emojis = useMemo(
    () => ({
      fr: "🇫🇷",
      en: "🇬🇧",
    }),
    []
  );

  return (
    <Select
      onValueChange={onValueChange}
    >
      <SelectTrigger className="gap-4 border-0 text-3xl">
        <SelectValue
          placeholder={emojis[i18n.language as keyof typeof emojis] ?? "🌐"}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="fr"
          defaultChecked={i18n.language === "fr"}
          className="cursor-pointer text-3xl"
        >
          {emojis["fr"]}
        </SelectItem>
        <SelectItem
          value="en"
          defaultChecked={i18n.language === "en"}
          className="cursor-pointer text-3xl"
        >
          {emojis["en"]}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
