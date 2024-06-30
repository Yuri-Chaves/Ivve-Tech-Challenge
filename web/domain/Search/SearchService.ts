import { SITEFact } from ".."
import { searchAdapter } from "./SearchAdapter"
import { searchApi } from "./SearchApi"

async function getByText(params: { text: string }): Promise<SITEFact> {
  const apiSearchFacts = await searchApi.getByText(params)

  return searchAdapter.apiSearchFactsToSiteFacts(apiSearchFacts)
}

export const searchService = {
  getByText
}
