import express from 'express';
import { AddProduct } from './AddProduct';
import { AllProduct } from './AllProducts';

const router = express.Router();

router.post('/add', AddProduct);
router.get('/', AllProduct);

export { router as ProductRouter };
