import { TLanguage, useSiteLanguage } from "@/services";
import { ScrollArea } from "./ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const categoryScrollTitle: Record<TLanguage, string> = {
  br: 'Categorias',
  us: 'Categories',
  es: 'Categorías',
}

export default function ChuckCategories() {
  const { language, panelProps } = useSiteLanguage()

  return (
    <div className="flex flex-col">
      <p>{categoryScrollTitle[language]}</p>
      <ScrollArea className="h-36 md:h-48">
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
    </div>
  )
}
