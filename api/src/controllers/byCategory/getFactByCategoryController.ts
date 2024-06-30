import { Request, Response } from 'express';
import { TCategory, TLang } from '../../interfaces';
import { GetFactByCategoryService } from '../../services';

class GetFactByCategoryController {
  async handle(req: Request, res: Response) {
    const category = req.query.category || 'dev'
    const lang = req.query.lang || 'en'
    const getFactByCategoryService = new GetFactByCategoryService();

    const response = await getFactByCategoryService.execute(category as TCategory, res);

    return res.json(response);
  }
}

export { GetFactByCategoryController };
