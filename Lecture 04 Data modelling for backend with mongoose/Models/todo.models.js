import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      typeof: String,
      required: true,
    },
    complete: {
      typeof: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // MODEL NAME
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodo",
      },
    ], // Array of SubTodos
  },
  { timestamps: true }
);
export const Todo = mongoose.model("Todo", todoSchema); // When "Todo" Save in Database then "Todo" -> "todos"
