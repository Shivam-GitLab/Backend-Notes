import mongooes from "mongooes";

const userSchema = new mongooes.Schema(
  {
    username: {
      typeof: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      typeof: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      typeof: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongooes.model("User", userSchema);
