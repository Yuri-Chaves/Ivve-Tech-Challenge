import { APIFactResponse } from "../FactTypes";
import { chuckJokes } from "@/instances/chuckApi";

async function getRandomFact(): Promise<APIFactResponse> {
  const response = await chuckJokes.get<APIFactResponse>('/random')

  return response.data
}

export const randomApi = {
  getRandomFact
}