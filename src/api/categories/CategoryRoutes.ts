import express from 'express';
import { AddCategory } from './AddCategory';
import { AllCategory } from './AllCategory';
import { SingleCategory } from './SingleCategory';

const router = express.Router();

router.post('/add', AddCategory);
router.get('/', AllCategory);
router.get('/:id', SingleCategory);
export { router as CategoryRouter };
