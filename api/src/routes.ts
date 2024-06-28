import { Router } from "express";
import { GetRandomFactController } from "./controllers";

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World!!' });
})

router.get('/random', new GetRandomFactController().handle);

export { router };