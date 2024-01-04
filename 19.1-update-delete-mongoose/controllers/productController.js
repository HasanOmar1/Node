import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const getActiveProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ isActive: true });
    if (!products) {
      res.status(404);
      throw new Error("No active products found");
    }
    res.send(products);
  } catch (error) {
    next(error);
  }
};

export const getProductByPrice = async (req, res, next) => {
  try {
    const products = await Product.find({
      "details.price": { $lt: 200, $gt: 99 },
    });
    if (!products) {
      res.status(404);
      throw new Error("No products found");
    }
    res.send(products);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isActive, discount } = req.body;

    if (isActive === undefined || discount === undefined) {
      res.status(400);
      throw new Error(
        "isActive and discount fields are required in the request body"
      );
    }

    const product = await Product.findByIdAndUpdate(
      id,
      { $set: { isActive, "details.discount": discount } },
      { new: true }
    );

    if (!product) {
      res.status(404);
      throw new Error("No product found with this id");
    }

    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.deleteOne({ _id: id });
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.send(product);
  } catch (error) {
    next(error);
  }
};

export const deleteAllProducts = async (req, res, next) => {
  try {
    const products = await Product.deleteMany({});
    res.send(products);
  } catch (error) {
    next(error);
  }
};
