import express from 'express';
import { AddProducts } from './AddProduct';

const router = express.Router();

router.post('/add', AddProducts);
// router.get('/', AllProduct);

export { router as ProductRouter };
