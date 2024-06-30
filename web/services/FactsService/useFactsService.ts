import { useFactsServiceStore } from "./FactsServiceStore";

export function useFactsService() {
  const { facts, category, searching } = useFactsServiceStore()
  return { facts, category, searching }
}

export function useFactsServiceManager() {
  const { setFact, setCategory, setSearching } = useFactsServiceStore()
  return { setFact, setCategory, setSearching }
}
