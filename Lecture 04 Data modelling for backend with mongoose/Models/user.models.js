import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  //
  {
    /*
  username: String,
  email: String,
  isActive: Boolean,
  */
    // Best Method Mongooes Super Power Call
    username: {
      typeof: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      typeof: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      typeof: String,
      required: true,
      // required: [true,"Password is Requires"],
    },
  },
  // Auto adds createdAt and updatedAt
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
