import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address
interface Specialities {
  speciality ?:string;
  treatments?:string[];
}

interface DoctorAttrs {
  name: string;
  featured_img: string;
  years_of_experience: string;
  city: string;
  state: string;
  country: string;
//   rating: string;
  designation: string;
  description: string;
  qualification: string;
  specialities?: Specialities;
  hospitals?: string[];
  createdBy?:string;
  updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface DoctorModel extends mongoose.Model<DoctorDoc> {
  build(attrs: DoctorAttrs): DoctorDoc;
}

// An interface that describes the properties
// that a Address Document has
interface DoctorDoc extends mongoose.Document {
    name: string;
    featured_img: string;
    years_of_experience: string;
    city: string;
    state: string;
    country: string;
  //   rating: string;
    designation: string;
    description: string;
    qualification: string;
    specialities?: string;
    hospitals?: string;
    createdBy?:string;
    updatedBy?:String;
}

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    featured_img: {
      type: String,
      required: true,
    },
    years_of_experience: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    // rating: {
    //   type: String,
    //   required: true,
    // },
    designation: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    specialities: [
        {
            speciality: {
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: 'Specialitie',
          },
          treatments:[ {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Treatment',
          }],
        },
      ],
    hospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Hospital',
    }],
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

doctorSchema.statics.build = (attrs: DoctorAttrs) => {
  return new Doctor(attrs);
};

const Doctor = mongoose.model<DoctorDoc, DoctorModel>(
  'Doctor',
  doctorSchema
);

export { Doctor };
