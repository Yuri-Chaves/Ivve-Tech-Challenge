import { APISearchResponse } from "./SearchTypes"
import { chuckJokes } from "@/instances/chuckApi"

async function getByText(params: { text: string }): Promise<APISearchResponse> {
  const response = await chuckJokes.get<APISearchResponse>('/search', { params })

  return response.data
}

export const searchApi = {
  getByText
}
