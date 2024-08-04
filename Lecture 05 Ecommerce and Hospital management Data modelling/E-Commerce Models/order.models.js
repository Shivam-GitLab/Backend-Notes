import mongooes from "mongooes";

const orderItemSchema = new mongooes.Schema({
  productId: {
    typr: mongooes.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongooes.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    customber: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "User",
    },

    orderItems: {
      type: [orderItemSchema],
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongooes.model("Order", orderSchema);
