"use client";

import { useSiteLanguage } from "@/services";
import PortugueseAbout from "./components/PortugueseAbout";
import SpanishAbout from "./components/SpanishAbout";
import EnglishAbout from "./components/EnglishAbout";

export default function About() {
  const { language } = useSiteLanguage();
  return (
    language === 'br' ? <PortugueseAbout /> : language === 'es' ? <SpanishAbout /> : <EnglishAbout />
  )
}