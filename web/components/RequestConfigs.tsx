"use client"

import { useSiteLanguage } from "@/services"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import ChuckCategories from "./ChuckCategories"
import { ResizablePanel, ResizablePanelGroup } from "./ui/resizable"

export default function RequestConfigs() {
  const { language, panelProps } = useSiteLanguage()
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 text-zinc-700 gap-2">
      <div className="hidden md:block">
        <h2 className="text-2xl font-bold text-orange-500">{panelProps.panelTitle[language]}</h2>
        <ChuckCategories />
        <div className="flex flex-col gap-1">
          <Input type="search" placeholder={panelProps.inputPlaceholder[language]} />
          <Button className="capitalize">{panelProps.buttonTitle[language]}</Button>
        </div>
      </div>
      <div className="md:hidden block">
        <ResizablePanelGroup direction="horizontal" className="w-full gap-1">
          <ResizablePanel defaultSize={50}>
            <ChuckCategories />
          </ResizablePanel>
          <ResizablePanel defaultSize={50}>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-right text-orange-500">{panelProps.panelTitle[language]}</h2>
              <Input type="search" placeholder={panelProps.inputPlaceholder[language]} />
              <Button className="capitalize">{panelProps.buttonTitle[language]}</Button>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}