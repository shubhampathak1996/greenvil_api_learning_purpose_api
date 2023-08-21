import { Request, Response } from 'express';
import { Contact } from '../../models/Contact';
import { NotFoundError } from '../../config';

const singleContact = async (req: Request, res: Response) => {
  const { id } = req.params;

  const contactDetails = await Contact.findById(id);
  if (!contactDetails) {
    throw new NotFoundError();
  }
  res.status(200).json(contactDetails);
};
export { singleContact };
