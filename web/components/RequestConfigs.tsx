"use client"

import { useSiteLanguage } from "@/services"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import ChuckCategories from "./ChuckCategories"
import { ResizablePanel, ResizablePanelGroup } from "./ui/resizable"
import { useState } from "react"
import { useFactsService } from "@/services"
import { useGetByCategory, useGetRandomFact, useSearchByText } from "@/domain"

export default function RequestConfigs() {
  const { language, panelProps } = useSiteLanguage()
  const { category } = useFactsService()
  const [value, setValue] = useState<string>('')
  const randomFact = useGetRandomFact()
  const factByCategory = useGetByCategory()
  const factByText = useSearchByText()

  return (
    <div className="flex flex-col h-96 bg-white rounded-lg  p-4 text-zinc-700 gap-2">
      <div className="hidden md:block">
        <h2 className="text-2xl font-bold text-orange-500">{panelProps.panelTitle[language]}</h2>
        <ChuckCategories />
        <div className="flex flex-col gap-1">
          <Input
            type="search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            placeholder={panelProps.inputPlaceholder[language]}
          />
          <Button
            className="capitalize"
            onClick={() => {
              if (category !== "none") {
                factByCategory.mutate({
                  category: category
                })
              }
              if (value) {
                factByText.mutate({
                  text: value
                })
              }
              if(category === "none" && !value) {
                randomFact.mutate(undefined)
              }
            }}
          >
            {panelProps.buttonTitle[language]}
          </Button>
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
              <Input
                type="search"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                }}
                placeholder={panelProps.inputPlaceholder[language]}
              />
              <Button
                className="capitalize"
                onClick={() => {
                  if (category !== "none") {
                    factByCategory.mutate({
                      category: category
                    })
                  }
                  if (value) {
                    factByText.mutate({
                      text: value
                    })
                  }
                  if(category === "none" && !value) {
                    randomFact.mutate(undefined)
                  }
                }}
              >
                {panelProps.buttonTitle[language]}
              </Button>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}