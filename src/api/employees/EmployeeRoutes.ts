import express from 'express';
import { addEmployee } from './AddEmployee';
import { getAllEmployees } from './AllEmployees';
import { getSingleEmployee } from './SingleEmployee';
import { updateEmployee } from './EditEmployee';
import { validateRequest, currentUser } from '../../config';

const router = express.Router();
import { body, check } from 'express-validator';

router
  .route('/add')
  .post(
    [body('name').trim().not().isEmpty().withMessage('Name must be provided')],
    validateRequest,
    addEmployee
  );
router.route('/').get(validateRequest, getAllEmployees);
router.route('/:id').get(validateRequest, getSingleEmployee);

router
  .route('/:id')
  .put(
    [body('name').trim().not().isEmpty().withMessage('Name must be provided')],
    validateRequest,
    currentUser,
    updateEmployee
  );

export { router as EmployeeRouter };
