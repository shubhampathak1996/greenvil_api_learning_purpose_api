import { Request, Response } from 'express';
import { filterData } from '../../services/filterService';
import { Category } from '../../models/Category';
const AllCategory = async (req: Request, res: Response) => {
  const { pageNumber, name } = req.query;
  const pageSize = 2;
  let searchParams = filterData(req);
  const page = Number(pageNumber) || 1;

  const total_categories = await Category.count({ ...searchParams });
  const total_pages = Math.ceil(total_categories / pageSize);
  const categories = await Category.find({ ...searchParams })
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .sort({ createdAt: -1 });
  res.status(200).send({
    total_categories,
    categories,
    total_pages,
    page,
  });
};
export { AllCategory };
