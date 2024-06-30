import { SITEFact } from "@/domain"

export type TCategory =
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

export interface FactsService {
  facts: SITEFact | null
  setFact: (fact: SITEFact | null) => void
  category: TCategory | "none"
  setCategory: (category: TCategory | "none") => void
  searching: boolean
  setSearching: (searching: boolean) => void
}