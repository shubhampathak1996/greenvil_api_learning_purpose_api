import { Request, Response } from 'express';
import { Contact } from '../../models/Contact';
import { NotFoundError } from '../../config';

const EditContact = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;
  const { id } = req.params;
  const contactDetails = await Contact.findById(id);
  if (!contactDetails) {
    throw new NotFoundError();
  }
  contactDetails.set({
    name,
    email,
    phone,
    message,
  });
  await contactDetails.save();
  res.status(202).json(contactDetails);
};

export { EditContact };
