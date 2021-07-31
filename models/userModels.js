const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  cart: {
    type: Array,
    default: [],
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", userSchema);
