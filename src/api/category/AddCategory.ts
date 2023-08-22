import { Request, Response } from 'express';
import { Category } from '../../models/Category';
const AddCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  const categoryData = Category.build({
    name,
  });
  await categoryData.save();
  res.status(201).json(categoryData);
};

export { AddCategory };
