import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { Category } from '../../models/Category';
import { NotFoundError } from '../../config';

const AddProduct = async (req: Request, res: Response) => {
  const { name, category, price, image, description, published_date } =
    req.body;
  const categoryDetails = await Category.findById(category);
  if (!categoryDetails) {
    throw new NotFoundError();
  }
  const productDetails = Product.build({
    name,
    category,
    price,
    image,
    description,
    published_date,
  });
  await productDetails.save();
  res.status(201).json(productDetails);
};

export { AddProduct };
