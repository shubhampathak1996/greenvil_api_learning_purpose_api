import { Request, Response } from 'express';
import { Banner } from '../../models/Banner';
import { NotFoundError } from '../../config';
const EditBanner = async (req: Request, res: Response) => {
  const { title, link, image } = req.body;
  const { id } = req.params;
  const bannerDetails = await Banner.findById(id);
  if (!bannerDetails) {
    throw new NotFoundError();
  }
  bannerDetails.set({
    title,
    link,
    image,
  });
  await bannerDetails.save();
  res.status(202).json(bannerDetails);
};
export { EditBanner };
