import { Request, Response } from 'express';
import { TLang } from '../../interfaces';
import { GetRandomFactService } from '../../services';

class GetRandomFactController {
  async handle(req: Request, res: Response) {
    const getRandomFactService = new GetRandomFactService();

    const response = await getRandomFactService.execute(res);

    return res.json(response);
  }
}

export { GetRandomFactController };
