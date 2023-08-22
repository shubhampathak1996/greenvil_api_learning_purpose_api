import { Request, Response } from 'express';
import { Category } from '../../models/Categoryold';
import { filterData } from '../../services/filterService';

const AllCategory = async (req: Request, res: Response) => {
  const { pageNumber, name } = req.query;
  const pageSize = 2;
  //   let page = 1;
  //   if (pageNumber) {
  //     page = Number(pageNumber);
  //   }
  let searchParams = filterData(req);
  const page = Number(pageNumber) || 1;

  const total_categories = await Category.count({ ...searchParams });
  const total_pages = Math.ceil(total_categories / pageSize);
  const categories = await Category.find({ ...searchParams })
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .sort({ createdAt: -1 });

  res.status(200).send({ total_categories, categories, total_pages, page });
};
export { AllCategory };
