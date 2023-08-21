import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface AppointmentAttrs {
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
interface AppointmentModel extends mongoose.Model<AppointmentDoc> {
  build(attrs: AppointmentAttrs): AppointmentDoc;
}

// An interface that describes the properties
// that a Address Document has
interface AppointmentDoc extends mongoose.Document {
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

const appointmentSchema = new mongoose.Schema(
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

appointmentSchema.statics.build = (attrs: AppointmentAttrs) => {
  return new Appointment(attrs);
};

const Appointment = mongoose.model<AppointmentDoc, AppointmentModel>(
  'Appointment',
  appointmentSchema
);

export { Appointment };
