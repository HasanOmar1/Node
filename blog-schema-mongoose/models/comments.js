import mongoose, { Schema } from "mongoose";

const commentsSchema = new mongoose.Schema(
  {
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
    body: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comments", commentsSchema);
export default Comment;
