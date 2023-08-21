import { Request, Response } from 'express';
import { Testimonial } from '../../models/Testimonial';

const AddTestimonial = async (req: Request, res: Response) => {
  const { name, content, designation } = req.body;
  const newTestimonial = Testimonial.build({
    name,
    content,
    designation,
  });
  await newTestimonial.save();
  res.status(201).json(newTestimonial);
};
export { AddTestimonial };
