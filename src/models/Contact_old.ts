import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface ContactAttrs {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  dob: string;
  medical_issue?: string;
  file?: string;
  createdBy?:string;
  updatedBy?:String;
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
    country: string;
    city: string;
    dob: string;
    medical_issue?: string;
    file?: string;
    createdBy?:string;
    updatedBy?:String;
}

const contactSchema = new mongoose.Schema(
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
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    medical_issue: {
      type: String,
      required: false,
    },
    file: {
      type: String,
      required: false,
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

contactSchema.statics.build = (attrs: ContactAttrs) => {
  return new Contact(attrs);
};

const Contact = mongoose.model<ContactDoc, ContactModel>(
  'Contact',
  contactSchema
);

export { Contact };
