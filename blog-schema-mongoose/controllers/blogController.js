import User from "../models/User.js";
import Blog from "../models/blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (error) {
    console.error("Error fetching blogs", error);
    res.status(500).send({ error: `Internal Server Error` });
  }
};

export const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.send(blog);
  } catch (error) {
    console.error("Error fetching blogs", error);
    res.status(500).send({ error: `Internal Server Error` });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, user, body } = req.body;
    // const blog = await Blog.create(req.body);
    const blog = new Blog({ title, user, body });
    const myUser = await User.findById(user);

    await blog.save();
    await User.findByIdAndUpdate(
      user,
      { $push: { blogs: blog._id } },
      { new: true }
    );
    const test = [blog, myUser];
    res.status(201).send(test);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updatedBlog);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send({ error: `Internal Server Error` });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.status(200).send(deletedBlog);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
