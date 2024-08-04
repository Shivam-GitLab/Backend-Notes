import mongooes from "mongooes";

const hositalSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    addressLine1: {
      type: String,
      requied: true,
    },
    addressLine2: {
      type: String,
      // requied: true,
    },
    city: {
      type: String,
      requied: true,
    },
    pincode: {
      type: String,
      requied: true,
    },
    specializedIn: [
      {
        type: String,
        // requied: true,
      },
    ],
  },

  { timestamps: true }
);

export const Hosital = mongooes.model("Hosital", hositalSchema);
