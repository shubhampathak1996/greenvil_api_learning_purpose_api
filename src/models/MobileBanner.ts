import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface MobilebannerAttrs {
  title: string;
  image: string;
  link: string;
  createdBy?:string;
  updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface MobilebannerModel extends mongoose.Model<MobilebannerDoc> {
  build(attrs: MobilebannerAttrs): MobilebannerDoc;
}

// An interface that describes the properties
// that a Address Document has
interface MobilebannerDoc extends mongoose.Document {
    title: string;
    image: string;
    link: string;
    createdBy?:string;
    updatedBy?:String;
}

const mobilebannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
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

mobilebannerSchema.statics.build = (attrs: MobilebannerAttrs) => {
  return new Mobilebanner(attrs);
};

const Mobilebanner = mongoose.model<MobilebannerDoc, MobilebannerModel>(
  'Mobilebanner',
  mobilebannerSchema
);

export { Mobilebanner };
