import { Request, Response } from 'express';
import { Testimonial } from '../../models/Testimonial';
import { NotFoundError } from '../../config';
const SingleTestimonial = async (req: Request, res: Response) => {
  const { id } = req.params;
  const testimonialDetails = await Testimonial.findById(id);
  if (!testimonialDetails) {
    throw new NotFoundError();
  }
  res.status(200).send(testimonialDetails);
};

export { SingleTestimonial };
