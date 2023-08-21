import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface SpecialitieAttrs {
    name: string;
    featured_img: string;
    description: string;
    slug: string;
    createdBy?:string;
    updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface SpecialitieModel extends mongoose.Model<SpecialitieDoc> {
  build(attrs: SpecialitieAttrs): SpecialitieDoc;
}

// An interface that describes the properties
// that a Address Document has
interface SpecialitieDoc extends mongoose.Document {
    name: string;
    featured_img: string;
    description: string;
    slug: string;
    createdBy?:string;
    updatedBy?:String;
}

const specialitieSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
    },
    featured_img: {
        type: String,
        required: false,
    },
    description: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
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

specialitieSchema.statics.build = (attrs: SpecialitieAttrs) => {
  return new Specialitie(attrs);
};

const Specialitie = mongoose.model<SpecialitieDoc, SpecialitieModel>(
  'Specialitie',
  specialitieSchema
);

export { Specialitie };
