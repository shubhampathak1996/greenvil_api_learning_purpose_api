import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../config';
import { Password } from '../../services/passwordService';

import { User } from '../../models/User';

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email }).populate('permission');
  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }

  const passwordsMatch = await Password.compare(
    existingUser.password,
    password
  );
  if (!passwordsMatch) {
    throw new BadRequestError('Invalid Credentials');
  }

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
      // createdAt: existingUser.createdAt,
      // role: existingUser.role,
    },
    process.env.JWT_KEY!
  );

  // Store it on session object
  req.session = {
    jwt: userJwt,
  };

  res.status(200).send({ user: existingUser, token: userJwt });
};

export { loginUser };
