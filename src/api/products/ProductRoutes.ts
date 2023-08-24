import express from 'express';
import { AddProducts } from './AddProduct';
import { AllProducts } from './AllProduct';

const router = express.Router();

router.post('/add', AddProducts);
router.get('/all', AllProducts);

export { router as ProductRouter };
