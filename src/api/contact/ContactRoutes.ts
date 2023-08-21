import express from 'express';

import { body } from 'express-validator';
import { validateRequest } from '../../config';
import { AddContact } from './AddContact';
import { AllContact } from './AllContact';
import { singleContact } from './SingleContact';
import { EditContact } from './EditContact';
import { DeleteContact } from './DeleteContact';

const router = express.Router();

router.post(
  '/add',
  [
    body('name').trim().isString().not().isEmpty().withMessage('Required'),
    body('email')
      .trim()
      .notEmpty()
      .isString()

      .isEmail()
      .not()
      .isEmpty()
      .withMessage('Required'),
    body('phone').trim().isString().not().isEmpty().withMessage('Required'),
    body('message').trim().isString().not().isEmpty().withMessage('Required'),
  ],
  validateRequest,
  AddContact
);
router.get('/all', AllContact);
router.get('/:id', singleContact);
router.put(
  '/:id',
  [
    body('name').trim().isString().not().isEmpty().withMessage('Required'),
    body('email')
      .trim()
      .notEmpty()
      .isString()

      .isEmail()
      .not()
      .isEmpty()
      .withMessage('Required'),
    body('phone').trim().isString().not().isEmpty().withMessage('Required'),
    body('message').trim().isString().not().isEmpty().withMessage('Required'),
  ],
  EditContact
);
router.delete('/:id', DeleteContact);
export { router as ContactRouter };
