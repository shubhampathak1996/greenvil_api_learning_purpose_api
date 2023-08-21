import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../config';
import { User } from '../../models/User';

const registerUser = async (req: Request, res: Response) => {
  const { name, phone, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError('Email in use');
  }
  const existingUserByPhone = await User.findOne({ phone });

  if (existingUserByPhone) {
    throw new BadRequestError('Phone in use');
  }

  const user = User.build({
    name,
    phone,
    email,
    password,
  });
  await user.save();

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
      // role: user.role,
      // createdAt: user.createdAt,
    },
    process.env.JWT_KEY!
  );

  // Store it on session object
  req.session = {
    jwt: userJwt,
  };

  res.status(201).send({ user, token: userJwt });
};

export { registerUser };
