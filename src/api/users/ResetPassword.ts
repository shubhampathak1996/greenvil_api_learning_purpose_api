import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../config';
import { Password } from '../../services/passwordService';

import { User } from '../../models/User';

const resetPassword = async (req: Request, res: Response) => {
  const { password, token } = req.body;
  // @ts-ignore
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  // console.log('Decoded', decoded);
  const user = await User.findById(decoded.id);

  if (user) {
    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();

    res.json({
      message: 'Password reset successfully',
    });
  } else {
    throw new BadRequestError('Invalid credentials');
  }
};

export { resetPassword };
