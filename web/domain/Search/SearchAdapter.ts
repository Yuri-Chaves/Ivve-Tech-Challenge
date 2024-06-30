import { SITEFact } from "..";
import { APISearchResponse } from "./SearchTypes";

function apiSearchFactsToSiteFacts(apiSearchFacts: APISearchResponse): SITEFact {
  return {
    total: apiSearchFacts.total,
    result: apiSearchFacts.result.map(fact => (
      {
        categories: fact.categories,
        created_at: fact.created_at,
        icon_url: fact.icon_url,
        id: fact.id,
        updated_at: fact.updated_at,
        url: fact.url,
        value: {
          br: fact.value.pt,
          es: fact.value.es,
          us: fact.value.en,
        }
      }
    ))
  }
}

export const searchAdapter = {
  apiSearchFactsToSiteFacts
}
