import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  availableTokens:{type:Number,required:true,default:50000000000000}
});

// Model
const UserModel = mongoose.model("user", userSchema)
export default UserModel

