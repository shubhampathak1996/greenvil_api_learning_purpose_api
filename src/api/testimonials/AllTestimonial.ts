import { Request, Response } from 'express';
import { Testimonial } from '../../models/Testimonial';

const AllTestimonials = async (req: Request, res: Response) => {
  const AllTestimonials = await Testimonial.find();
  res.status(200).json(AllTestimonials);
};
export { AllTestimonials };
