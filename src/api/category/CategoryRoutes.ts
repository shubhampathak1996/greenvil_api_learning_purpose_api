import { AddCategory } from './AddCategory';
import { AllCategory } from './AllCategory';
import { SingleCategory } from './SingleCategory';

const express = require('express');

const router = express.Router();

router.post('/add', AddCategory);

router.get('/all', AllCategory);
router.get('/:id', SingleCategory);

export { router as CategoryRouter };
