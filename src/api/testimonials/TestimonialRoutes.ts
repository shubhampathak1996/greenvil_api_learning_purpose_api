import express, { Router } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../config';
import { AddTestimonial } from './AddTestimonial';
import { AllTestimonials } from './AllTestimonial';
import { SingleTestimonial } from './SingleTestimonial';
import { EditTestimonial } from './EditTestimonial';
import { DeleteBanner } from '../banners/DeleteBanner';
import { DeleteTestimonial } from './DeleteTestimonial';

const router = express.Router();
router.post(
  '/add',
  [
    body('name').trim().isString().not().isEmpty().withMessage('Required'),
    body('content').trim().isString().not().isEmpty().withMessage('Required'),
    body('designation')
      .trim()
      .isString()
      .not()
      .isEmpty()
      .withMessage('Required'),
  ],
  validateRequest,
  AddTestimonial
);

router.get('/all', AllTestimonials);
router.get('/:id', SingleTestimonial);
router.put(
  '/:id',
  [body('name').trim().isString().not().isEmpty().withMessage('Required')],
  EditTestimonial
);
router.delete('/:id', DeleteTestimonial);

export { router as TestimonialRouter };
