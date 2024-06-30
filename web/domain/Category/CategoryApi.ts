import { APIFactResponse } from "../FactTypes";
import { TCategory } from "@/services";
import { chuckJokes } from "@/instances/chuckApi";

async function getByCategory(params: {category: TCategory}): Promise<APIFactResponse> {
  const response = await chuckJokes.get<APIFactResponse>('/random/category', { params })

  return response.data
}

export const categoryApi = {
  getByCategory
}
