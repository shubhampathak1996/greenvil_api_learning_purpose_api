import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface BannerAttrs {
    title:string;
    image:string;
    link:string;
}

// An interface that describes the properties
// that a Address Model has
interface BannerModel extends mongoose.Model<BannerDoc> {
  build(attrs: BannerAttrs): BannerDoc;
}

// An interface that describes the properties
// that a Address Document has
interface BannerDoc extends mongoose.Document {
    title:string;
    image:string;
    link:string;
}

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image:{
        type: String,
        required: true,
    },
    link:{
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

bannerSchema.statics.build = (attrs: BannerAttrs) => {
  return new Banner(attrs);
};

const Banner = mongoose.model<BannerDoc, BannerModel>(
  'Banner',
  bannerSchema
);

export { Banner };
