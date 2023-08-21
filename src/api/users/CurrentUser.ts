import { Request, Response } from 'express';
import {
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
} from '../../config';
import { UserRoles } from '../../domain/enums/UserRoles';
import { User } from '../../models/User';

const current_user = async (req: Request, res: Response) => {
  if (req.currentUser) {
    if (req.currentUser.role === UserRoles.CRM_USER) {
      const currentUserInfo = await User.findById(req.currentUser.id).populate(
        'permission'
      );
      res.status(200).send(currentUserInfo);
    } else {
      const currentUserInfo = await User.findById(req.currentUser.id);
      res.status(200).send(currentUserInfo);
    }
  } else {
    throw new NotFoundError();
  }
};

export { current_user };
