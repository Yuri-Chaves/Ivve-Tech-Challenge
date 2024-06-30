import { TCategory } from "@/services";

export interface APIFactResponse {
  categories: Array<TCategory>;
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: {
    en: string
    es: string
    pt: string
  }
}

export interface SITEFactModel {
  categories: Array<TCategory>;
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: {
    us: string
    es: string
    br: string
  }
}

export interface SITEFact {
  total: number
  result: Array<SITEFactModel>
}

export interface APIFactRequestError {
  message: {
    en: string
    es: string
    pt: string
  }
}

export interface SITEFactRequestError {
  message: {
    us: string
    es: string
    br: string
  }
}
