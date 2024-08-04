import mongooes from "mongooes";

// const
const doctorSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    salary: {
      type: Number,
      requied: true,
    },
    qualification: {
      type: String,
      requied: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
      requied: true,
    },
    worksInHospitals: [
      {
        type: mongooes.Schema.Types.ObjectId,
        ref: "Hosital",
      },
    ],
  },

  { timestamps: true }
);

export const Doctor = mongooes.model("Doctor", doctorSchema);
