import { TCategory, TLanguage, useSiteLanguage } from "@/services";
import { ScrollArea } from "./ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useFactsService, useFactsServiceManager } from "@/services";

const categoryScrollTitle: Record<TLanguage, string> = {
  br: 'Categorias',
  us: 'Categories',
  es: 'Categorías',
}

export default function ChuckCategories() {
  const { language, panelProps } = useSiteLanguage()
  const { category } = useFactsService()
  const { setCategory } = useFactsServiceManager()

  const sortedCategories = panelProps.categories.slice(1).sort((a, b) => {
    const aLabel = a.label[language].toLocaleLowerCase()
    const bLabel = b.label[language].toLocaleLowerCase()

    if (aLabel < bLabel) return -1
    if (aLabel > bLabel) return 1
    return 0
  })

  const shownCategories = [panelProps.categories[0], ...sortedCategories]

  return (
    <div className="flex flex-col">
      <p>{categoryScrollTitle[language]}</p>
      <ScrollArea className="h-36 md:h-48">
        <ToggleGroup
          type="single"
          className="flex flex-col gap-2"
          defaultValue="none"
          value={category}
          onValueChange={(value) => {
            setCategory(value as TCategory)
          }}
        >
          {shownCategories.map((category) => (
            <ToggleGroupItem
              key={category.value}
              value={category.value}
              className="flex flex-row items-center w-full justify-start gap-1"
            >
              {category.icon}
              <p>{category.label[language]}</p>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </ScrollArea>
    </div>
  )
}
