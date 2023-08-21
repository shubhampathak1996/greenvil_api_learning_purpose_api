import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address

interface ProductAttrs {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  published_date: Date;
}

// An interface that describes the properties
// that a Address Model has
interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductAttrs): ProductDoc;
}

// An interface that describes the properties
// that a Address Document has
interface ProductDoc extends mongoose.Document {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  published_date: Date;
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
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

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  'Product',
  productSchema
);

export { Product };
