const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: "Nmae is required",
      minlength: [2, "Too short"],
      maxlength: [50, "Too long"],
    },
    expiry: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      requred: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
