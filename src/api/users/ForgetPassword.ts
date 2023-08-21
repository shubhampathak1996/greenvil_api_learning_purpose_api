import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError, NotFoundError } from '../../config';

import { User } from '../../models/User';
import { sendEmail } from '../../services/mail';

const forgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

};

export { forgetPassword };
