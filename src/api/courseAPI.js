// src/api/courseAPI.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/courses";

// Get all courses
export const getCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Create a new course
export const createCourse = async (courseData) => {
  try {
    const response = await axios.post(API_URL, courseData);
    return response.data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

// Update a course
export const updateCourse = async (id, courseData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, courseData);
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};

// Delete a course
export const deleteCourse = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};
