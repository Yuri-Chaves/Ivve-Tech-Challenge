import { AxiosError } from 'axios';
import { Response } from 'express';
import { chuckJokes } from '../../instances/chuckJokes';
import { SearchChuckFactResponse } from '../../interfaces';
import { TranslateUtils } from '../../utils';

class GetFactByTextService {
  async execute(text: string, res: Response) {
    try {
      const englishSearch = await TranslateUtils.getTranslation('auto', 'en', text)
      try {
        const chuckJokesApi = await chuckJokes.get<SearchChuckFactResponse>(`/search?query=${englishSearch}`);
        const ChuckFacts = chuckJokesApi.data.result

        try {
          const factsPromises = ChuckFacts.map(async (item) => {
            const esValue = await TranslateUtils.getTranslation('en', 'es', item.value)
            const ptValue = await TranslateUtils.getTranslation('en', 'pt', item.value)

            return {
              ...item,
              value: {
                en: item.value,
                es: esValue,
                pt: ptValue,
              } 
            }
          })
          return {
            total: chuckJokesApi.data.total,
            result: await Promise.all(factsPromises),
          }
        } catch (error) {
          console.log(JSON.stringify(error, undefined, 2));
          return res.status(502).json({
            message: {
              en: 'Translation not supported',
              es: 'La traducción no está soportada',
              pt: 'A tradução não é suportada',
            },
          })
        }
      } catch (err) {
        const error = err as AxiosError
        console.log(error);
      }
    } catch (error) {
      console.log(JSON.stringify(error, undefined, 2));
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

export { GetFactByTextService };
