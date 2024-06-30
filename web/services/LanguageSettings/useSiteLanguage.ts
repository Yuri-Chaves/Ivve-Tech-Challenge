import { useSiteLanguageStore } from "./siteLanguageStore";

export function useSiteLanguage() {
  const { language, links, panelProps } = useSiteLanguageStore();
  return { language, links, panelProps };
}

export function useSiteLanguageManager() {
  const { setLanguage } = useSiteLanguageStore();
  return { setLanguage };
}