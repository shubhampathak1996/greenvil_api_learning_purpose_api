import { Request, Response } from 'express';
import { Contact } from '../../models/Contact';
import { BadRequestError, CustomError } from '../../config';

const AddContact = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;
  const userDetails = await Contact.findOne({ email });
  if (userDetails) {
    throw new BadRequestError('Duplicate Email');
  }
  const userDetailsPhone = await Contact.findOne({ phone });
  if (userDetailsPhone) {
    throw new BadRequestError('Phone Already Exist');
  }
  const newContact = Contact.build({
    name,
    email,
    phone,
    message,
  });
  await newContact.save();
  res.status(201).json(newContact);
};

export { AddContact };
