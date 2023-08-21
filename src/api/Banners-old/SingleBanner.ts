import { Request, Response } from 'express';
import { NotFoundError } from '../../config';
import { Banner } from '../../models/Banner';

const getSingleBanner = async (req: Request, res: Response) => {
  const { id } = req.params;
  const bannerDetails = await Banner.findById(id);
  if (!bannerDetails) {
    throw new NotFoundError();
  }
  res.status(200).send(bannerDetails);
};

export { getSingleBanner };
