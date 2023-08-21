import { Request, Response } from 'express';
import { Testimonial } from '../../models/Testimonial';
import { NotFoundError } from '../../config';

const DeleteTestimonial = async (req: Request, res: Response) => {
  const { id } = req.params;
  const testimonialDetails = Testimonial.findById(id);
  if (!testimonialDetails) {
    throw new NotFoundError();
  }
  await testimonialDetails.remove();
  res.status(202).json('Record Successfully Deleted');
};

export { DeleteTestimonial };
