import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address

interface ContactAttrs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// An interface that describes the properties
// that a Address Model has
interface ContactModel extends mongoose.Model<ContactDoc> {
  build(attrs: ContactAttrs): ContactDoc;
}

// An interface that describes the properties
// that a Address Document has
interface ContactDoc extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
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

ContactSchema.statics.build = (attrs: ContactAttrs) => {
  return new Contact(attrs);
};

const Contact = mongoose.model<ContactDoc, ContactModel>(
  'Contact',
  ContactSchema
);

export { Contact };
