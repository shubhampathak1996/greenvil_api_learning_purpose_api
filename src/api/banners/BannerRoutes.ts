import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../config';
import { addBanner } from '../Banners-old/AddBanner';
import { AllBanners } from './AllBanner';
import { SingleBanner } from './SingleBanner';
import { EditBanner } from './EditBanner';
import { DeleteBanner } from './DeleteBanner';

const router = express.Router();

router.post(
  '/add',
  [
    body('title').trim().isString().not().isEmpty().withMessage('Required'),
    body('link').trim().not().isEmpty().withMessage('Required'),
    body('image').trim().not().isEmpty().withMessage('Required'),
  ],
  validateRequest,
  addBanner
);

router.get('/all', AllBanners);

router
  .get('/:id', SingleBanner)

  .delete('/:id', DeleteBanner)
  .put(
    '/:id',
    [
      body('title').trim().isString().not().isEmpty().withMessage('Required'),
      body('link').trim().not().isEmpty().withMessage('Required'),
      body('image').trim().not().isEmpty().withMessage('Required'),
    ],
    validateRequest,
    EditBanner
  );

export { router as BannerRouter };
