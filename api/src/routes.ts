import { Router } from "express";
import { GetFactByCategoryController, GetRandomFactController } from "./controllers";

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World!!' });
})

router.get('/random', new GetRandomFactController().handle);

router.get('/random/category', new GetFactByCategoryController().handle)

export { router };
