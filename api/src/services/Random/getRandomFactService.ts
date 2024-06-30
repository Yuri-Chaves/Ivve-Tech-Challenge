import { AxiosError } from "axios";
import { Response } from "express";
import { chuckJokes } from "../../instances/chuckJokes";
import { ChuckFactResponse, TLang } from "../../interfaces";
import { TranslateUtils } from "../../utils";

class GetRandomFactService {
  async execute(res: Response) {
    try {
      const response = await chuckJokes.get<ChuckFactResponse>('/random');
      const fact = response.data;
      const esValue = await TranslateUtils.getTranslation('en', 'es', fact.value)
      const ptValue = await TranslateUtils.getTranslation('en', 'pt', fact.value)
      return {
        ...fact,
        value: {
          en: fact.value,
          es: esValue,
          pt: ptValue,
        }
      }
    } catch (err) {
      const error = err as AxiosError
      console.log(JSON.stringify(error, null, 2));
      return res.status(502).json({
        message: {
          en: 'Chuck Norris API is down',
          es: 'La API de Chuck Norris está caída',
          pt: 'A API de Chuck Norris está caída',
        },
      })
    }
  }
}

export { GetRandomFactService };
