import { SITEFact } from "../FactTypes";
import { factAdapter } from "../FactAdapter";
import { categoryApi } from "./CategoryApi";
import { TCategory } from "@/services";

async function getByCategory(params: {category: TCategory}): Promise<SITEFact> {
  const factByCategory = await categoryApi.getByCategory(params)

  return factAdapter.apiFactToSiteFact(factByCategory)
}

export const categoryService = {
  getByCategory
}
