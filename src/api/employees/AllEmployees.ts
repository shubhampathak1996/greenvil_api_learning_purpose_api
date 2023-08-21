import { Request, Response } from 'express';
import { Employee } from '../../models/Employees';
import { filterData } from '../../services/filterService';
const getAllEmployees = async (req: Request, res: Response) => {
  // TODO: Filters

  // TODO: Authorization

  const sortBy = 'createdAt';
  const pageSize = 10;
  const searchParams = filterData(req);
  const total_employees = await Employee.count({ ...searchParams });
  const { pageNumber } = req.query;
  const page = Number(pageNumber) || 1;

  const employees = await Employee.find({ ...searchParams })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort(sortBy);
  res.status(200).send({
    employees: employees,
    pages: Math.ceil(total_employees / pageSize),
    page: page,
    total_employees: total_employees,
  });
};

export { getAllEmployees };


