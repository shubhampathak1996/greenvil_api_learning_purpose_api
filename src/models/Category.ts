import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address

interface CategoryAttrs {
  name: string;
}

// An interface that describes the properties
// that a Address Model has
interface CategoryModel extends mongoose.Model<CategoryDoc> {
  build(attrs: CategoryAttrs): CategoryDoc;
}

// An interface that describes the properties
// that a Address Document has
interface CategoryDoc extends mongoose.Document {
  name: string;
}

const categorySchema = new mongoose.Schema(
  {
    name: {
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
    timestamps: true,
  }
);

categorySchema.statics.build = (attrs: CategoryAttrs) => {
  return new Category(attrs);
};

const Category = mongoose.model<CategoryDoc, CategoryModel>(
  'Category',
  categorySchema
);

export { Category };
