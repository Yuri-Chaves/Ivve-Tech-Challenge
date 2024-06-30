import { TLanguage } from "@/services"

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
  value: Record<TLanguage, string>
}

export const chuckIvveApiMock:ChuckFactProps = {
  categories: ["animal" , "career", "celebrity"],
  created_at: "2020-01-05 13:42:26.447675",
  icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png",
  id: "Wnf-6fa0RQyT8DCXjDd83A",
  updated_at: "2020-01-05 13:42:26.447675",
  url: "https://api.chucknorris.io/jokes/Wnf-6fa0RQyT8DCXjDd83A",
  value: {
    us: "A Chuck Norris fact a day keeps his roundhouse kicks away.",
    es: "Un hecho de Chuck Norris al día mantiene alejados sus patadas giratorias.",
    br: "Um fato de Chuck Norris por dia mantém seus chutes redondos afastados."
  }
}