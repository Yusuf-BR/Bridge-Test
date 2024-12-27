import axios from "axios";

// Define the API URL
const API_URL = "http://localhost:5000/api/courses";

// Get a course by ID
export const getCourseById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(`Course with ID ${id} fetched successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course with ID ${id}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};

// Get all courses
export const getCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Courses fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Create a new course
export const createCourse = async (courseData) => {
  try {
    const response = await axios.post(API_URL, courseData);
    console.log("Course created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating course:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Update a course by ID
export const updateCourse = async (id, courseData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, courseData);
    console.log(`Course with ID ${id} updated successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error updating course with ID ${id}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};

// Delete a course by ID
export const deleteCourse = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log(`Course with ID ${id} deleted successfully:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error deleting course with ID ${id}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};
