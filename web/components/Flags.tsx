"use client"

import Image from "next/image"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { TLanguage, useSiteLanguage, useSiteLanguageManager } from "@/services"

const flags: Array<TLanguage> = ['br', 'es', 'us']

export default function Flags() {
  const { setLanguage } = useSiteLanguageManager()
  const { language } = useSiteLanguage()

  return (
    <ToggleGroup
      type="single"
      defaultValue="br"
      value={language}
      onValueChange={value => {
        if (value) {
          setLanguage(value as TLanguage)
        }
      }}
    >
      {flags.map(flag => (
        <ToggleGroupItem value={flag} aria-label={flag} key={flag}>
          <Image
            src={`/flags/${flag}.png`}
            alt={`${flag.toUpperCase()}`}
            width={32}
            height={20}
          />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}