import { Request, Response } from 'express';
import { Banner } from '../../models/Banner';

const addBanner = async (req: Request, res: Response) => {
  const {
    title,
    image,
    link,
  } = req.body;

  const banner = Banner.build({
    title,
    image,
    link,
  });
  await banner.save();

  res.status(201).send(banner);
};

export { addBanner };


