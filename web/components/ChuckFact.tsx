import { AvatarImage } from "@radix-ui/react-avatar"
import Paper from "./Paper"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"

type TCategory =
| "animal"
| "career"
| "celebrity"
| "dev"
| "explicit"
| "fashion"
| "food"
| "history"
| "money"
| "movie"
| "music"
| "political"
| "religion"
| "science"
| "sport"
| "travel"

interface ChuckFactProps {
  categories: Array<TCategory>
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

import { IoCalendarNumber } from 'react-icons/io5' 

export default function ChuckFact(fact: ChuckFactProps) {
  return (
    <Paper>
      <div className="h-full relative">
        <div className="flex flex-row items-start justify-between gap-3">
          <Avatar>
            <AvatarImage src={fact.icon_url} alt="@ChuckFact" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-row gap-1">
            {fact.categories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        </div>
        <p>{fact.value}</p>
        <div className="flex flex-row items-center justify-end gap-1 absolute bottom-0 right-0">
          <IoCalendarNumber />
          <p>{new Date(fact.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </Paper>
  )
}