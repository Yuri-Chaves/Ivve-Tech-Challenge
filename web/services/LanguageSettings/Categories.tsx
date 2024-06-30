import { PanelProps } from './siteLanguageTypes'

import {
  MdPets,
  MdStar,
  MdLogoDev,
  MdNoAdultContent,
  MdLocalMovies,
  MdSportsFootball,
} from 'react-icons/md'
import { BiSolidBriefcase } from 'react-icons/bi'
import {
  GiAmpleDress,
  GiMoneyStack,
  GiMusicalScore,
  GiCongress,
  GiCorkedTube,
  GiCommercialAirplane
} from "react-icons/gi"
import { IoFastFood, IoBan } from "react-icons/io5"
import { FaBookAtlas, FaBookBible } from "react-icons/fa6"

export const categories: PanelProps['categories'] = [
    {
      label: {
        br: "nenhuma",
        es: "ninguna",
        us: "none",
      },
      icon: <IoBan />,
      value: "none",
    },
    {
      label: {
        br: "animal",
        es: "animal",
        us: "animal",
      },
      icon: <MdPets />,
      value: "animal",
    },
    {
      label: {
        br: "carreira",
        es: "carrera",
        us: "career",
      },
      icon: <BiSolidBriefcase />,
      value: "career",
    },
    {
      label: {
        br: "celebridade",
        es: "celebridad",
        us: "celebrity",
      },
      icon: <MdStar />,
      value: "celebrity",
    },
    {
      label: {
        br: "ciência",
        es: "ciencia",
        us: "science",
      },
      icon: <GiCorkedTube />,
      value: "science",
    },
    {
      label: {
        br: "cinema",
        es: "cine",
        us: "movie",
      },
      icon: <MdLocalMovies />,
      value: "movie",
    },
    {
      label: {
        br: "comida",
        es: "comida",
        us: "food",
      },
      icon: <IoFastFood />,
      value: "food",
    },
    {
      label: {
        br: "dev",
        es: "dev",
        us: "dev",
      },
      icon: <MdLogoDev />,
      value: "dev",
    },
    {
      label: {
        br: "dinheiro",
        es: "dinero",
        us: "money",
      },
      icon: <GiMoneyStack />,
      value: "money",
    },
    {
      label: {
        br: "esporte",
        es: "deporte",
        us: "sport",
      },
      icon: <MdSportsFootball />,
      value: "sport",
    },
    {
      label: {
        br: "explícito",
        es: "explícito",
        us: "explicit",
      },
      icon: <MdNoAdultContent />,
      value: "explicit",
    },
    {
      label: {
        br: "história",
        es: "historia",
        us: "history",
      },
      icon: <FaBookAtlas />,
      value: "history",
    },
    {
      label: {
        br: "moda",
        es: "moda",
        us: "fashion",
      },
      icon: <GiAmpleDress />,
      value: "fashion",
    },
    {
      label: {
        br: "música",
        es: "música",
        us: "music",
      },
      icon: <GiMusicalScore />,
      value: "music",
    },
    {
      label: {
        br: "política",
        es: "política",
        us: "political",
      },
      icon: <GiCongress />,
      value: "political",
    },
    {
      label: {
        br: "religião",
        es: "religión",
        us: "religion",
      },
      icon: <FaBookBible />,
      value: "religion",
    },
    {
      label: {
        br: "viagem",
        es: "viaje",
        us: "travel",
      },
      icon: <GiCommercialAirplane />,
      value: "travel",
    },
]