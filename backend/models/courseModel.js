// models/courseModel.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
