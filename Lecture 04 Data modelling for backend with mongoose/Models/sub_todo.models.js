import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
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
}, { timestamps: true });

export const subTodo = mongoose.model("subTodo", subTodoSchema);
