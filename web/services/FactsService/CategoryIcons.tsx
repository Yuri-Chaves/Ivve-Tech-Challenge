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
import { TCategory } from './FactsServiceTypes'

export const categoryIcons: Record<TCategory, JSX.Element> = {
  animal: <MdPets />,
  career: <BiSolidBriefcase />,
  celebrity: <MdStar />,
  dev: <MdLogoDev />,
  explicit: <MdNoAdultContent />,
  fashion: <GiAmpleDress />,
  food: <IoFastFood />,
  history: <FaBookAtlas />,
  money: <GiMoneyStack />,
  movie: <MdLocalMovies />,
  music: <GiMusicalScore />,
  political: <GiCongress />,
  religion: <FaBookBible />,
  science: <GiCorkedTube />,
  sport: <MdSportsFootball />,
  travel: <GiCommercialAirplane />,
}