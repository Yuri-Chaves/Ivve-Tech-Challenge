import { create } from 'zustand' 
import { SiteLanguageService, TLanguage } from './siteLanguageTypes';
import { categories } from './Categories';

export const useSiteLanguageStore = create<SiteLanguageService>((set) => ({
  language: 'br',
  setLanguage: (language: TLanguage) => set({ language }),
  links: [
    {
      name: "facts",
      href: "/",
      label: {
        br: 'Fatos',
        es: 'Hechos',
        us: 'Facts'
      }
    },
    {
      name: "about",
      href: "/about",
      label: {
        br: 'Sobre',
        es: 'Acerca de',
        us: 'About'
      }
    },
  ],
  panelProps: {
    panelTitle:{
      br: 'Filtrar',
      es: 'Filtrar',
      us: 'Filter'
    },
    buttonTitle: {
      br: 'novo fato',
      es: 'nuevo hecho',
      us: 'new fact'
    },
    inputPlaceholder:{
      br: 'Pesquisar fato',
      es: 'Buscar hecho',
      us: 'Search fact'
    },
    categories: categories
  }
}));