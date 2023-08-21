import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address

interface TestimonialAttrs {
  name: string;
  content: string;
  designation: string;
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
  content: string;
  designation: string;
}

const TestimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
      },
    },
  }
);

TestimonialSchema.statics.build = (attrs: TestimonialAttrs) => {
  return new Testimonial(attrs);
};

const Testimonial = mongoose.model<TestimonialDoc, TestimonialModel>(
  'Testimonial',
  TestimonialSchema
);

export { Testimonial };
