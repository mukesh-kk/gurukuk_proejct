const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    default: "Male",
    enum: ["Male", "Female", "Other"],
  },
  leadFrom: {
    type: String,
    enum: ["LinkedIn", "Friends", "Job Portal", "Others"],
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
},{ timestamps: true });

const user = mongoose.model("user", userSchema);

module.exports = user;
