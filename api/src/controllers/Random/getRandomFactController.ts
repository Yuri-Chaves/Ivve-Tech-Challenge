import { Request, Response } from 'express';
import { TLang } from '../../interfaces';
import { GetRandomFactService } from '../../services';

class GetRandomFactController {
  async handle(req: Request, res: Response) {
    const lang = req.query.lang || 'en'
    const getRandomFactService = new GetRandomFactService();

    const response = await getRandomFactService.execute(lang as TLang, res);

    return res.json(response);
  }
}

export { GetRandomFactController };
