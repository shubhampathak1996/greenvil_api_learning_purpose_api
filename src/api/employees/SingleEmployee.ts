import { Request, Response } from 'express';
import { NotFoundError } from '../../config';
import { Employee } from '../../models/Employees';

const getSingleEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employeeDetails = await Employee.findById(id);
  if (!employeeDetails) {
    throw new NotFoundError();
  }
  res.status(200).send(employeeDetails);
};

export { getSingleEmployee };
