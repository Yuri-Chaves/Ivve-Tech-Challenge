import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.log(err.message);
    return res.status(400).json({
      message: {
        en: "There was an error with your request, check the data and try again",
        es: 'Hubo un error con tu solicitud, revisa los datos y vuelve a intentarlo',
        pt: 'Houve um erro com sua requisição, verifique os dados e tente novamente',
      },
    });
  }
  return res.status(500).json({
    message: {
      en: 'Internal server error',
      es: 'Hubo un error en el servidor, inténtelo nuevamente más tarde.',
      pt: 'Houve um erro no servidor, tente novamente mais tarde',
    },
  });
})

app.listen(3333, () => console.log('Server is running on port 3333'));