import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address
interface Specialities {
  speciality ?:string;
  treatments?:string[];
}


interface HospitalAttrs {
    name: string;
    image: string;
    speciality_type?: string;
    addess: string;
    city: string;
    state: string;
    country : string;
    pincode : string;
    number_of_beds? : string;
    gallery? : string;
    description : string;
    key_features? : string;
    certificates? : string;
    slug : string;
    specialities? : Specialities;
  createdBy?:string;
  updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface HospitalModel extends mongoose.Model<HospitalDoc> {
  build(attrs: HospitalAttrs): HospitalDoc;
}

// An interface that describes the properties
// that a Address Document has
interface HospitalDoc extends mongoose.Document {
    name: string;
    image: string;
    speciality_type?: string;
    addess: string;
    city: string;
    state: string;
    country : string;
    pincode : string;
    number_of_beds? : string;
    gallery? : string;
    description : string;
    key_features? : string;
    certificates? : string;
    slug : string;
    specialities? : Specialities;
  createdBy?:string;
  updatedBy?:String;
}

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    speciality_type: {
      type: String,
      required: false,
    },
    addess: {
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
    pincode: {
      type: String,
      required: true,
    },
    number_of_beds: {
      type: String,
      required: false,
    },
    gallery: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    key_features: {
      type: String,
      required: false,
    },
    certificates: {
      type: String,
      required: false,
    },
    slug: {
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
          treatments: [{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Treatment',
          }],
        },
      ],
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

hospitalSchema.statics.build = (attrs: HospitalAttrs) => {
  return new Hospital(attrs);
};

const Hospital = mongoose.model<HospitalDoc, HospitalModel>(
  'Hospital',
  hospitalSchema
);

export { Hospital };
