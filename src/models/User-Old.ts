import mongoose from 'mongoose';
import UserProviderEnum from '../domain/enums/UserProviderEnum';
import { UserRoles } from '../domain/enums/UserRoles';
import { Password } from '../services/passwordService';
import AutoIncrementField from 'mongoose-sequence';
// @ts-ignore
const AutoIncrement = AutoIncrementField(mongoose);
// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  name: string;
  phone: string;
  email: string;
  password: string;
  is_blocked?: boolean;
  permission?: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  name: string;
  phone: string;
  email: string;
  password: string;
  is_blocked?: boolean;
  permission?: string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    permission: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Permission',
    },
    is_blocked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.password;
      },
    },
    timestamps: true,
  }
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

// @ts-ignore
userSchema.plugin(AutoIncrement, {
  inc_field: 'user_id',
  start_seq: 10000,
});

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
