import { Request, Response } from 'express';
import { Contact } from '../../models/Contact';

const AllContact = async (req: Request, res: Response) => {
  const getAllContact = await Contact.find();
  res.status(200).json(getAllContact);
};
export { AllContact };
