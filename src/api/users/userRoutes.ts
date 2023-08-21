import express from 'express';
import {registerUser} from "./signup"
import { validateRequest, currentUser } from '../../config';
import mongoose from 'mongoose';

const router = express.Router();
import { body, check } from 'express-validator';
import { loginUser} from "./login"
import {signOutUser} from "./signout"
import { current_user } from './CurrentUser';
// import { COUNTRY_DIAL_CODES, COUNTRY_NAMES } from '../../domain/Countries';
import { forgetPassword } from './ForgetPassword';
import { resetPassword } from './ResetPassword';
router.route('/signup').post(
  [
    body('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('First name must be provided'),
    body('phone')
      .trim()
      .not()
      .isEmpty()
      .isNumeric()
      .withMessage('Phone must be provided'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  registerUser
);
router
  .route('/login')
  .post(
    [
      body('email').isEmail().withMessage('Email must be valid'),
      body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 characters'),
    ],
    validateRequest,
    loginUser
  );
router.route('/forget-password').post(
  [body('email').isEmail().withMessage('Email must be valid')],

  validateRequest,
  forgetPassword
);
router.route('/reset-password').post(
  [
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
    check(
      'confirm_password',
      'Confirm Password field must have the same value as the password field'
    )
      .exists()
      .custom((value, { req }) => value === req.body.password),
  ],

  validateRequest,
  resetPassword
);
router.route('/logout').post(signOutUser);
router.route('/current-user').get(current_user);

export { router as UserRouter };
