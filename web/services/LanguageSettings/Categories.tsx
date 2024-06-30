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

export const categories: PanelProps['categories'] = {
  br: [
    {
      label: "nenhuma",
      icon: <IoBan />,
      value: "none",
    },
    {
      label: "animal",
      icon: <MdPets />,
      value: "animal",
    },
    {
      label: "carreia",
      icon: <BiSolidBriefcase />,
      value: "career",
    },
    {
      label: "celebridade",
      icon: <MdStar />,
      value: "celebrity",
    },
    {
      label: "ciência",
      icon: <GiCorkedTube />,
      value: "science",
    },
    {
      label: "cinema",
      icon: <MdLocalMovies />,
      value: "movie",
    },
    {
      label: "comida",
      icon: <IoFastFood />,
      value: "food",
    },
    {
      label: "dev",
      icon: <MdLogoDev />,
      value: "dev",
    },
    {
      label: "dinheiro",
      icon: <GiMoneyStack />,
      value: "money",
    },
    {
      label: "esporte",
      icon: <MdSportsFootball />,
      value: "sport",
    },
    {
      label: "explícito",
      icon: <MdNoAdultContent />,
      value: "explicit",
    },
    {
      label: "história",
      icon: <FaBookAtlas />,
      value: "history",
    },
    {
      label: "moda",
      icon: <GiAmpleDress />,
      value: "fashion",
    },
    {
      label: "música",
      icon: <GiMusicalScore />,
      value: "music",
    },
    {
      label: "política",
      icon: <GiCongress />,
      value: "political",
    },
    {
      label: "religião",
      icon: <FaBookBible />,
      value: "religion",
    },
    {
      label: "viagem",
      icon: <GiCommercialAirplane />,
      value: "travel",
    },
  ],
  es: [
    {
      label: "ninguna",
      icon: <IoBan />,
      value: "none",
    },
    {
      label: "animal",
      icon: <MdPets />,
      value: "animal",
    },
    {
      label: "carrera",
      icon: <BiSolidBriefcase />,
      value: "career",
    },
    {
      label: "celebridad",
      icon: <MdStar />,
      value: "celebrity",
    },
    {
      label: "ciencia",
      icon: <GiCorkedTube />,
      value: "science",
    },
    {
      label: "cine",
      icon: <MdLocalMovies />,
      value: "movie",
    },
    {
      label: "comida",
      icon: <IoFastFood />,
      value: "food",
    },
    {
      label: "deporte",
      icon: <MdSportsFootball />,
      value: "sport",
    },
    {
      label: "dev",
      icon: <MdLogoDev />,
      value: "dev",
    },
    {
      label: "dinero",
      icon: <GiMoneyStack />,
      value: "money",
    },
    {
      label: "explícito",
      icon: <MdNoAdultContent />,
      value: "explicit",
    },
    {
      label: "historia",
      icon: <FaBookAtlas />,
      value: "history",
    },
    {
      label: "moda",
      icon: <GiAmpleDress />,
      value: "fashion",
    },
    {
      label: "música",
      icon: <GiMusicalScore />,
      value: "music",
    },
    {
      label: "política",
      icon: <GiCongress />,
      value: "political",
    },
    {
      label: "religión",
      icon: <FaBookBible />,
      value: "religion",
    },
    {
      label: "viaje",
      icon: <GiCommercialAirplane />,
      value: "travel",
    }
  ],
  us: [
    {
      label: "none",
      icon: <IoBan />,
      value: "none",
    },
    {
      label: "animal",
      icon: <MdPets />,
      value: "animal",
    },
    {
      label: "career",
      icon: <BiSolidBriefcase />,
      value: "career",
    },
    {
      label: "celebrity",
      icon: <MdStar />,
      value: "celebrity",
    },
    {
      label: "dev",
      icon: <MdLogoDev />,
      value: "dev",
    },
    {
      label: "explicit",
      icon: <MdNoAdultContent />,
      value: "explicit",
    },
    {
      label: "fashion",
      icon: <GiAmpleDress />,
      value: "fashion",
    },
    {
      label: "food",
      icon: <IoFastFood />,
      value: "food",
    },
    {
      label: "history",
      icon: <FaBookAtlas />,
      value: "history",
    },
    {
      label: "money",
      icon: <GiMoneyStack />,
      value: "money",
    },
    {
      label: "movie",
      icon: <MdLocalMovies />,
      value: "movie",
    },
    {
      label: "music",
      icon: <GiMusicalScore />,
      value: "music",
    },
    {
      label: "political",
      icon: <GiCongress />,
      value: "political",
    },
    {
      label: "religion",
      icon: <FaBookBible />,
      value: "religion",
    },
    {
      label: "science",
      icon: <GiCorkedTube />,
      value: "science",
    },
    {
      label: "sport",
      icon: <MdSportsFootball />,
      value: "sport",
    },
    {
      label: "travel",
      icon: <GiCommercialAirplane />,
      value: "travel",
    },
  ]
}