import mongoose from "mongoose";


mongoose.connect("mongodb+srv://shivraj:8QtkeV7ki6onmoTc@cluster0.gngbljm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
      minLength: 6,
      maxLength: 30
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
    password: {
      type: String,
      required: true,
      maxLength: 6
    },
  },
  { timestamps: true }
);


export const User = mongoose.model("User", userSchema)