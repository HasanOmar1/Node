import Blog from "../models/blog.js";
import Comment from "../models/comments.js";

export const createComment = async (req, res) => {
  try {
    // const comment = await Comment.create(req.body);
    const { user, blog, body } = req.body;
    const comment = new Comment({ user, blog, body });
    await comment.save();
    await Blog.findByIdAndUpdate(
      blog,
      { $push: { comments: comment._id } },
      { new: true }
    );
    res.status(201).send(comment);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.send(comments);
  } catch (error) {
    console.error("Error fetching blogs", error);
    res.status(500).send({ error: `Internal Server Error` });
  }
};
