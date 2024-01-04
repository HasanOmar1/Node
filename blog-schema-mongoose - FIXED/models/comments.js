import mongoose from "mongoose";
import Blog from "./blog.js";
import User from "./User.js";

const commentsSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentsSchema);
export default Comment;
