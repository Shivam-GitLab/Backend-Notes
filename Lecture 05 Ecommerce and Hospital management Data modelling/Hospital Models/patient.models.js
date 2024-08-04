import mongooes from "mongooes";

const patientSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    digondsedWith: {
      type: String,
      requied: true,
    },
    address: {
      type: String,
      requied: true,
    },
    age: {
      type: Number,
      requied: true,
    },
    bloodGroup: {
      type: String,
      requied: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "OTHER"],
      requied: true,
    },
    admitedIn: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },

  { timestamps: true }
);

export const Patient = mongooes.model("Patient", patientSchema);
