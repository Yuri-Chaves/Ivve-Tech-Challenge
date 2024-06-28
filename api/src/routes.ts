import { Router } from "express";
import { GetFactByCategoryController, GetFactByTextController, GetRandomFactController } from "./controllers";

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World!!' });
})

router.get('/random', new GetRandomFactController().handle);

router.get('/random/category', new GetFactByCategoryController().handle)

router.get('/search', new GetFactByTextController().handle)

export { router };
