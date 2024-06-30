import React from "react";

export type TLanguage = 'br' | 'es' | 'us';

type LinkMenu =  {
  name: 'facts' | 'about'
  label: {
    br: 'Fatos' | 'Sobre'
    es: 'Hechos' | 'Acerca de'
    us: 'Facts' | 'About'
  }
  href: string
}

type TPanelCategory = {
  label: {
    br: string
    es: string
    us: string
  }
  value: 
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
  | "none"
  icon: React.ReactNode
}

export type PanelProps = {
  panelTitle: {
    br: 'Filtrar'
    es: 'Filtrar'
    us: 'Filter'
  }
  buttonTitle: {
    br: 'novo fato'
    es: 'nuevo hecho'
    us: 'new fact'
  },
  inputPlaceholder:{
    br: 'Pesquisar fato',
    es: 'Buscar hecho',
    us: 'Search fact'
  },
  categories: Array<TPanelCategory>
}

export interface SiteLanguageService {
  language: TLanguage;
  links: Array<LinkMenu>;
  setLanguage: (language: TLanguage) => void;
  panelProps: PanelProps;
}