import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 500,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blogs", blogSchema);
export default Blog;
