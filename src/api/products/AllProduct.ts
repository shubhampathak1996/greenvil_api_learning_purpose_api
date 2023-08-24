import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { filterData } from '../../services/filterService';
const AllProducts = async (req: Request, res: Response) => {
  const { pageNumber, name } = req.query;
  const pageSize = 25;
  let searchParams = filterData(req);
  const page = Number(pageNumber) || 1;
  const total_Products = await Product.count({ ...searchParams });
  const total_pages = Math.ceil(total_Products / pageSize);
  const products = await Product.find({ ...searchParams })
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .sort({ createdAt: -1 });
  res.status(200).send({
    total_Products,
    products,
    total_pages,
    page,
  });
  // const getAllProduct = await Product.find();
};
export { AllProducts };
