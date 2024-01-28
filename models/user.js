const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema(
  {
    pincode: { type: Number, required: true },
    city: { type: String, required: true },
    phone: {
      type: String,
      minlength: [10, 'Phone number must be in 10 Digits i.e "333730xxxx'],
      maxlength: [10, 'Phone number must be in 10 Digits i.e "333730xxxx']
    },
  },
  { _id: false }
);

const userSchema = new Schema({
  firstName: {
    type: String,
    maxlength: [16, "maximum length 16 chars"],
    required: true,
  },
  lastNam: { type: String, maxlength: [16, "maximum length 16 chars"] },
  age: {
    type: Number,
    min: [12, "minimum age should be 12"],
    max: [100, "maximum age should be 12"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: "Invalid email address",
    },
  },
  address: addressSchema,
});

exports.User = mongoose.model("User", userSchema);
