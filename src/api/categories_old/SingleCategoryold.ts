import { Request, Response } from 'express';
import { Category } from '../../models/Categoryold';
import { NotFoundError } from '../../config';

const SingleCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const categoryDetails = await Category.findById(id);

  if (!categoryDetails) {
    throw new NotFoundError();
  }
  res.status(200).json(categoryDetails);
};
export {};
