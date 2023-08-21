import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface BlogCategoryAttrs {
    name: string;
    featured_img: string;
    parent_category?: string;
    createdBy?:string;
    updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface BlogCategoryModel extends mongoose.Model<BlogCategoryDoc> {
  build(attrs: BlogCategoryAttrs): BlogCategoryDoc;
}

// An interface that describes the properties
// that a Address Document has
interface BlogCategoryDoc extends mongoose.Document {
    name: string;
    featured_img: string;
    parent_category?: string;
    createdBy?:string;
    updatedBy?:String;
}

const blogcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    featured_img: {
      type: String,
      required: true,
    },
    parent_category: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'BlogCategory',
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

blogcategorySchema.statics.build = (attrs: BlogCategoryAttrs) => {
  return new BlogCategory(attrs);
};

const BlogCategory = mongoose.model<BlogCategoryDoc, BlogCategoryModel>(
  'BlogCategory',
  blogcategorySchema
);

export { BlogCategory };
