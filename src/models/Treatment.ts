import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Address


interface TreatmentAttrs {
    name: string;
    featured_img: string;
    cost: string;
    description: string;
    specialitie?: string[];
  createdBy?:string;
  updatedBy?:String;
}

// An interface that describes the properties
// that a Address Model has
interface TreatmentModel extends mongoose.Model<TreatmentDoc> {
  build(attrs: TreatmentAttrs): TreatmentDoc;
}

// An interface that describes the properties
// that a Address Document has
interface TreatmentDoc extends mongoose.Document {
    name: string;
    featured_img: string;
    cost: string;
    description: string;
    specialitie?: string[];
  createdBy?:string;
  updatedBy?:String;
}

const treatmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    featured_img: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    specialties: [{
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Specialitie',
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

treatmentSchema.statics.build = (attrs: TreatmentAttrs) => {
  return new Treatment(attrs);
};

const Treatment = mongoose.model<TreatmentDoc, TreatmentModel>(
  'Treatment',
  treatmentSchema
);

export { Treatment };
