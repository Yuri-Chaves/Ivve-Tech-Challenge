"use client"

import { AvatarImage } from "@radix-ui/react-avatar"
import Paper from "./Paper"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"

import { IoCalendarNumber } from 'react-icons/io5' 
import { useSiteLanguage } from "@/services"
import { SITEFact } from "@/domain"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel"
import { Skeleton } from "./ui/skeleton"
import { categoryIcons } from "@/services/FactsService/CategoryIcons"
import { useEffect, useState } from "react"
interface ChuckFactProps {
  facts: SITEFact | null
  inLoading?: boolean
}

export default function ChuckFact({facts, inLoading}: ChuckFactProps) {
  const { language } = useSiteLanguage()
  const [carousel, setCarousel] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!carousel) return
    setCount(carousel.scrollSnapList().length)
    setCurrent(carousel.selectedScrollSnap() + 1)

    carousel.on("select", () => {
      setCurrent(carousel.selectedScrollSnap() + 1)
    })
  }, [carousel])

  if(facts === null || inLoading) {
    return (
      <Paper>
        <div className="h-full relative">
          <div className="flex flex-row items-start justify-between gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <Skeleton className="h-6 w-full mt-2" />
          <div className="flex flex-row items-center justify-end gap-1 absolute bottom-2 right-0">
            <IoCalendarNumber />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </Paper>
    )
  }

  return (
    <div className="h-full">
      <Carousel className="h-full" setApi={setCarousel}>
        <CarouselContent className="min-h-96">
          {facts.result.map((fact) => (
            <CarouselItem key={fact.id} className="min-h-full">
              <Paper>
                <div className="h-full relative">
                  <div className="flex flex-row items-start justify-between gap-3">
                    <Avatar>
                      <AvatarImage src={fact.icon_url} alt="@ChuckFact" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-row gap-1">
                      {fact.categories.map((category) => (
                        <Badge key={category}>{categoryIcons[category]}</Badge>
                      ))}
                    </div>
                  </div>
                  <p>{fact.value[language]}</p>
                  <div className="flex flex-row items-center justify-end gap-1 absolute bottom-0 right-0">
                    <IoCalendarNumber />
                    <p>{new Date(fact.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="py-2 text-center absolute bottom-0 left-0">
                    <p>{
                    language === "br"?
                      `Fato ${current} de ${count}` :
                      language === "es"?
                        `Hecho ${current} de ${count}` :
                        `Fact ${current} of ${count}`
                    }</p>
                  </div>
                </div>
              </Paper>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}