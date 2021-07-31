const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  paymentID: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
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

module.exports = mongoose.model("Payments", paymentSchema);
