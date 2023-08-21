import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface BlogAttrs {
    name: string;
    featured_img: string;
    category?: string;
    description: string;
    slug: string;
    createdBy?:string;
    updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface BlogModel extends mongoose.Model<BlogDoc> {
  build(attrs: BlogAttrs): BlogDoc;
}

// An interface that describes the properties
// that a Address Document has
interface BlogDoc extends mongoose.Document {
    name: string;
    featured_img: string;
    category?: string;
    description: string;
    slug: string;
    createdBy?:string;
    updatedBy?:String;
}

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    featured_img: {
      type: String,
      required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'BlogCategory',
    },
    description: {
        type: String,
        required: true,
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

blogSchema.statics.build = (attrs: BlogAttrs) => {
  return new Blog(attrs);
};

const Blog = mongoose.model<BlogDoc, BlogModel>(
  'Blog',
  blogSchema
);

export { Blog };
