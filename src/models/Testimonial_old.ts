import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface TestimonialAttrs {
  name: string;
  testimonial: string;
  image: string;
  country: string;
  hospital?: string;
  createdBy?:string;
  updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface TestimonialModel extends mongoose.Model<TestimonialDoc> {
  build(attrs: TestimonialAttrs): TestimonialDoc;
}

// An interface that describes the properties
// that a Address Document has
interface TestimonialDoc extends mongoose.Document {
    name: string;
    testimonial: string;
    image: string;
    country: string;
    hospital?: string;
    createdBy?:string;
    updatedBy?:String;
}

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    hospital: {
      type: String,
      required: false,
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    updatedBy:{
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
      },
    },
  }
);

testimonialSchema.statics.build = (attrs: TestimonialAttrs) => {
  return new Testimonial(attrs);
};

const Testimonial = mongoose.model<TestimonialDoc, TestimonialModel>(
  'Testimonial',
  testimonialSchema
);

export { Testimonial };
