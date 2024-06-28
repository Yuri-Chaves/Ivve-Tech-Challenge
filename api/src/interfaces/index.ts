export interface ChuckFactResponse {
  categories: Array<TCategory>
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export type TLang =
  | 'en'
  | 'es'
  | 'pt'

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