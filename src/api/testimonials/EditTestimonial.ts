import { Request, Response } from 'express';
import { Testimonial } from '../../models/Testimonial';
import { NotFoundError } from '../../config';

const EditTestimonial = async (req: Request, res: Response) => {
  const { name, content, designation } = req.body;
  const { id } = req.params;
  const testimonialDetails = await Testimonial.findById(id);
  if (!testimonialDetails) {
    throw new NotFoundError();
  }
  testimonialDetails.set({
    name,
    content,
    designation,
  });
  await testimonialDetails.save();
  res.status(200).json(testimonialDetails);
};

export { EditTestimonial };
