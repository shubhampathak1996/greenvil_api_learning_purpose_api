import mongoose from "mongoose";
import { Password } from "../services/passwordService";
interface UserAttrs{
    name:string;
    phone:string;
    email:string;
    password:string;
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
  }

interface UserDoc extends mongoose.Document{
    name:string;
    phone:string;
    email:string;
    password:string;
}



const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})
userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
  };

  userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
      const hashed = await Password.toHash(this.get('password'));
      this.set('password', hashed);
    }
    done();
  });
  

const User = mongoose.model<UserDoc,UserModel>('User', userSchema);

export { User };