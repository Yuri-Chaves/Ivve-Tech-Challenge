import { APIFactResponse, SITEFactModel } from "../FactTypes"

export interface APISearchResponse {
  total: number
  result: Array<APIFactResponse>
}
