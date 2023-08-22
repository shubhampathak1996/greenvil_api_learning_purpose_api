import { Request, Response } from 'express';
import { Product } from '../../models/Productold';
import { filterData } from '../../services/filterService';

const AllProduct = async (req: Request, res: Response) => {
  const { pageNumber, name } = req.query;
  const pageSize = 2;
  //   let page = 1;
  //   if (pageNumber) {
  //     page = Number(pageNumber);
  //   }
  let searchParams = filterData(req);
  const page = Number(pageNumber) || 1;

  const total_products = await Product.count({ ...searchParams });
  const total_pages = Math.ceil(total_products / pageSize);
  const products = await Product.find({ ...searchParams })
    .populate('category')
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .sort({ createdAt: -1 });

  res.status(200).send({ total_products, products, total_pages, page });
};
export { AllProduct };
