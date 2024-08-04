import mongooes from "mongooes";

const categorySchema = new mongooes.model(
  {
    name: {
      typeof: String,
      required: true,
    },
  },
  { timestamp: true }
);

export const Category = mongooes.model("Category", categorySchema);
