import { AddCategory } from './AddCategory';
import { AllCategory } from './AllCategory';
import { SingleCategory } from './SingleCategory';

const express = require('express');

const router = express.Router();

router.post('/add', AddCategory);
router.get('/:id', SingleCategory);
router.get('/all', AllCategory);

export { router as CategoryRouter };
