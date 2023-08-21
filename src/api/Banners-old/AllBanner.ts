import { Request, Response } from 'express';
import { filterData } from '../../services/filterService';
import { Banner } from '../../models/Banner';
const getAllBanners = async (req: Request, res: Response) => {
  // TODO: Filters

  // TODO: Authorization

  const sortBy = 'createdAt';
  const pageSize = 10;
  const searchParams = filterData(req);
  const total_banners = await Banner.count({ ...searchParams });
  const { pageNumber } = req.query;
  const page = Number(pageNumber) || 1;

  const banners = await Banner.find({ ...searchParams })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort(sortBy);
  res.status(200).send({
    banners: banners,
    pages: Math.ceil(total_banners / pageSize),
    page: page,
    total_banners: total_banners,
  });
};

export { getAllBanners };


