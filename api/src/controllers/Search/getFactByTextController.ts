import { Request, Response } from 'express';
import { TLang } from '../../interfaces';
import { GetFactByTextService } from '../../services';

class GetFactByTextController {
  async handle(req: Request, res: Response) {
    const text = req.query.text as string

    if (text?.length < 3) {
      return res.status(400).json({
        message: {
          en: 'The searched text must be between 3 and 120 characters',
          es: 'El texto de búsqueda debe tener entre 3 y 120 caracteres',
          pt: 'O texto da busca deve ter entre 3 e 120 caracteres'
        },
      });
    }

    const getFactByTextService = new GetFactByTextService();

    const response = await getFactByTextService.execute(text, res);

    return res.json(response);
  }
}

export { GetFactByTextController };
