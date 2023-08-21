import express from 'express';
import { addBanner } from './AddBanner';
import { getAllBanners } from './AllBanner';
import { getSingleBanner } from './SingleBanner';
import { updateBanner } from './EditBanner';
import { validateRequest, currentUser } from '../../config';

const router = express.Router();
import { body, check } from 'express-validator';

router
  .route('/add')
  .post(
    [body('title').trim().not().isEmpty().withMessage('Name must be provided')],
    validateRequest,
    addBanner
  );
router.route('/').get(validateRequest, getAllBanners);
router.route('/:id').get(validateRequest, getSingleBanner);

router
  .route('/:id')
  .put(
    [body('name').trim().not().isEmpty().withMessage('Name must be provided')],
    validateRequest,
    currentUser,
    updateBanner
  );

export { router as BannerRouter };
