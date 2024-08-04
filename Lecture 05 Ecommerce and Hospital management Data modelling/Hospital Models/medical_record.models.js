import mongooes from "mongooes";

const medicalRecordSchema = new mongooes.Schema(
  {},

  { timestamps: true }
);

export const MedicalRecord = mongooes.model(
  "MedicalRecord",
  medicalRecordSchema
);
