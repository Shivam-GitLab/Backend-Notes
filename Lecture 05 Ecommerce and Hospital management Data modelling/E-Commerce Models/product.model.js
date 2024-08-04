import mongooes from "mongooes";

const productSchema = new mongooes.Schema(
  {
    description: {
      typeof: String,
      required: true,
    },

    name: {
      typeof: String,
      required: true,
    },

    productImage: {
      type: String,
    },

    price: {
      type: Number,
      default: 0,
    },

    stock: {
      typeof: Number,
      default: 0,
    },

    category: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    owner: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = mongooes.model("Product", productSchema);
