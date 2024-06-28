import { AxiosError } from 'axios';
import { Response } from 'express';
import { chuckJokes } from '../../instances/chuckJokes';
import { ChuckFactResponse, TCategory, TLang } from "../../interfaces";
import { TranslateUtils } from '../../utils';

class GetFactByCategoryService {
  async execute(category: TCategory, lang: TLang, res: Response) {
    if ( lang !== 'en' && lang !== 'es' && lang !== 'pt') {
      return res.status(405).json({
        message: 'Language not supported',
      });
    }
    try {
      const response = await chuckJokes.get<ChuckFactResponse>(`/random?category=${category}`);
      const fact = response.data;
      if (lang === 'en') {
        return fact
      } else {
        try {
          const translation = await TranslateUtils.getTranslation('en', lang, fact.value)
        return {
          ...fact,
          value: translation,
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
      console.log(JSON.stringify(error, null, 2));
      return res.status(502).json({
        message: 'Chuck Norris API is down',
      })
    }
  }
}

export { GetFactByCategoryService };
