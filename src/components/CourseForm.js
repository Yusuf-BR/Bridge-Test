import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { createCourse, updateCourse } from "../api/courseAPI";

const CourseForm = ({ courseToEdit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    if (courseToEdit) {
      setTitle(courseToEdit.title);
      setPrice(courseToEdit.price);
      setImageUrl(courseToEdit.imageUrl);
    }
  }, [courseToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = { title, price, imageUrl };

    if (courseToEdit) {
      await updateCourse(courseToEdit._id, courseData);
    } else {
      await createCourse(courseData);
    }

    navigate("/"); // Use navigate to redirect to the homepage after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{courseToEdit ? "Update Course" : "Add Course"}</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">{courseToEdit ? "Update" : "Add"} Course</button>
    </form>
  );
};

export default CourseForm;