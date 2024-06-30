import { factAdapter } from "../FactAdapter";
import { SITEFact } from "../FactTypes";
import { randomApi } from "./RandomApi";

async function getRandomFact(): Promise<SITEFact> {
  const apiFact = await randomApi.getRandomFact()

  return factAdapter.apiFactToSiteFact(apiFact)
}

export const randomService = {
  getRandomFact
}
