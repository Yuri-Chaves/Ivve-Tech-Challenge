import { Request, Response } from "express";
import { ChuckFactResponse, TLang } from "../../interfaces";
import { AxiosError } from "axios";
import { chuckJokes } from "../../instances/chuckJokes";

class GetRandomFactService {
  async execute(lang: TLang, res: Response) {
    if ( lang !== 'en' && lang !== 'es' && lang !== 'pt') {
      return res.status(405).json({
        message: 'Language not supported',
      });
    }
    try {
      const response = await chuckJokes.get<ChuckFactResponse>('/random');
      const fact = response.data;
      if (lang === 'en') {
        return fact
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

export  { GetRandomFactService };