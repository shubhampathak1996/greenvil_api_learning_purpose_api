import { Request, Response } from 'express';
import { NotFoundError } from '../../config';
import { Banner } from '../../models/Banner';

const updateBanner = async (req: Request, res: Response) => {
  const {
    title,
    image,
    link,
  } = req.body;
  const { id } = req.params;
  const bannerDetails = await Banner.findById(id);
  if (!bannerDetails) {
    throw new NotFoundError();
  }
  bannerDetails.set({
    title,
    image,
    link,
  });
  await bannerDetails.save();

  res.status(202).send(bannerDetails);
};

export { updateBanner };
