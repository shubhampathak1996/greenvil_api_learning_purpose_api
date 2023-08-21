import { Request, Response } from 'express';

const signOutUser = async (req: Request, res: Response) => {
  req.session = null;
  res.send({});
};

export { signOutUser };
