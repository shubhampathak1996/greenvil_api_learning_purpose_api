import { NotFoundError } from '../../config';
import { Contact } from '../../models/Contact';
import { Request, Response } from 'express';

const DeleteContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const singleContactDetails = await Contact.findById(id);

  if (!singleContactDetails) {
    throw new NotFoundError();
  }
  await singleContactDetails.remove();
  res.status(202).json('Record Deleted Successfully!');
};

export { DeleteContact };
