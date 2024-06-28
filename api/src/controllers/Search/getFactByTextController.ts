import { Request, Response } from 'express';
import { TLang } from '../../interfaces';
import { GetFactByTextService } from '../../services';

class GetFactByTextController {
  async handle(req: Request, res: Response) {
    const text = req.query.text as string
    const lang = req.query.lang || 'en'

    if (text?.length < 3) {
      const errorMessage =
        lang === 'en'
          ? 'The searched text must be between 3 and 120 characters'
          : lang === 'es'
          ? 'El texto de búsqueda debe tener entre 3 y 120 caracteres'
          : 'O texto da busca deve ter entre 3 e 120 caracteres'

      return res.status(400).json({
        message: errorMessage,
      });
    }

    const getFactByTextService = new GetFactByTextService();

    const response = await getFactByTextService.execute(text, lang as TLang, res);

    return res.json(response);
  }
}

export { GetFactByTextController };
