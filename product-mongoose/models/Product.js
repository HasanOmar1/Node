import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "Price must be a positive number",
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value && value.length >= 2;
        },
        message: () => "Must include atleast 2 images",
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          const israeliPhoneNumberRegex =
            /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/gm;
          return israeliPhoneNumberRegex.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid Israeli phone number`,
      },
    },
    dateAdded: {
      type: String,
      default: Date.now,
    },
  },
});

const Product = mongoose.model("Product", productScheme);

export default Product;
