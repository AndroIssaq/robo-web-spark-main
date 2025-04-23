
import { useState, useEffect } from "react";

export type Language = "ar" | "en";

export const useLanguage = () => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Language) || "ar";
    }
    return "en";
  });

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", lang);
      document.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return [lang, setLang] as const;
};
