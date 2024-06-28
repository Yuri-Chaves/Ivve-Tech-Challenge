import { AxiosError } from 'axios';
import { Response } from 'express';
import { chuckJokes } from '../../instances/chuckJokes';
import { SearchChuckFactResponse, TLang } from '../../interfaces';
import { TranslateUtils } from '../../utils';

class GetFactByTextService {
  async execute(text: string, lang: TLang, res: Response) {
    if (lang !== 'en' && lang !== 'es' && lang !== 'pt') {
      return res.status(405).json({
        message: 'Language not supported',
      });
    }
    try {
      const englishSearch = await TranslateUtils.getTranslation('auto', 'en', text)
      try {
        const chuckJokesApi = await chuckJokes.get<SearchChuckFactResponse>(`/search?query=${englishSearch}`);
  
        if (lang === 'en') {
          return chuckJokesApi.data
        } else {
          const EnglishChuckFacts = chuckJokesApi.data.result
          try {
            const translationPromises = EnglishChuckFacts.map(async (item) => {
              const translation = await TranslateUtils.getTranslation('en', lang, item.value)
              return {...item, value: translation }
            })
            return {
              total: chuckJokesApi.data.total,
              result: await Promise.all(translationPromises),
            }
          } catch (error) {
            console.log(JSON.stringify(error, undefined, 2));
            return res.status(502).json({
              message: 'Translation not supported',
            })
          }
        }
      } catch (err) {
        const error = err as AxiosError
        console.log(error);
      }
    } catch (error) {
      console.log(JSON.stringify(error, undefined, 2));
      return res.status(502).json({
        message: 'Unable to translate search',
      })
    }
  }
}

export { GetFactByTextService };
