import { Request, Response } from 'express';
import { GetRandomFactService } from '../../services';
import { TLang } from '../../interfaces';

class GetRandomFactController {
  async handle(req: Request, res: Response) {
    const lang = req.query.lang as TLang;
    const getRandomFactService = new GetRandomFactService();

    const response = await getRandomFactService.execute(lang, res);

    return res.json(response);
  }
}

export { GetRandomFactController };