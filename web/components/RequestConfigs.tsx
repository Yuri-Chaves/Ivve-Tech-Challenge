"use client"

import { useSiteLanguage } from "@/services"
import { ScrollArea } from "./ui/scroll-area"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { Input } from "./ui/input"
import { Button } from "./ui/button"



export default function RequestConfigs() {
  const { language, panelProps } = useSiteLanguage()
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 text-zinc-700 gap-2">
      <h2 className="text-2xl font-bold text-orange-500">{panelProps.panelTitle[language]}</h2>
      <ScrollArea className="h-48">
        <ToggleGroup type="single" className="flex flex-col gap-2" defaultValue="none">
          {panelProps.categories[language].map((category) => (
            <ToggleGroupItem
              key={category.label}
              value={category.value}
              className="flex flex-row items-center w-full justify-start gap-1"
            >
              {category.icon}
              <p>{category.label}</p>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </ScrollArea>
      <Input type="search" placeholder={panelProps.inputPlaceholder[language]} />
      <Button className="capitalize">{panelProps.buttonTitle[language]}</Button>
    </div>
  )
}