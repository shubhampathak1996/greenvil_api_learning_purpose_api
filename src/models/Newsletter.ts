import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface BannerAttrs {
  email: string;
  createdBy?:string;
  updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface BannerModel extends mongoose.Model<BannerDoc> {
  build(attrs: BannerAttrs): BannerDoc;
}

// An interface that describes the properties
// that a Address Document has
interface BannerDoc extends mongoose.Document {
    email: string;
    createdBy?:string;
    updatedBy?:String;
}

const bannerSchema = new mongoose.Schema(
  {
    email: {
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

bannerSchema.statics.build = (attrs: BannerAttrs) => {
  return new Banner(attrs);
};

const Banner = mongoose.model<BannerDoc, BannerModel>(
  'Banner',
  bannerSchema
);

export { Banner };
