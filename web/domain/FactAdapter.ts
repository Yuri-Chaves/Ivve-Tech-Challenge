import { APIFactResponse, SITEFact } from "./FactTypes";

function apiFactToSiteFact(apiFact: APIFactResponse): SITEFact {
  return {
    total: 1,
    result: [
      {
        categories: apiFact.categories,
        created_at: apiFact.created_at,
        icon_url: apiFact.icon_url,
        id: apiFact.id,
        updated_at: apiFact.updated_at,
        url: apiFact.url,
        value: {
          br: apiFact.value.pt,
          es: apiFact.value.es,
          us: apiFact.value.en,
        }
      },
    ]
  }
}

export const factAdapter = {
  apiFactToSiteFact
}
