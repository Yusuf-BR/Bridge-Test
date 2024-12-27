import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../api/courseAPI"; // import API functions
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // To show loading state

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses(); // Fetch courses from API
        setCourses(data); // Set courses in the state
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchCourses();
  }, []);

  // Handle course deletion
  const handleDelete = async (id) => {
    try {
      await deleteCourse(id); // Delete course using API
      setCourses(courses.filter(course => course._id !== id)); // Remove course from state
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // Render loading state or the course list
  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div>
      <h2>Course List</h2>
      <Link to="/add-course">Add New Course</Link>
      <ul>
        {courses.length === 0 ? (
          <li>No courses available</li>
        ) : (
          courses.map((course) => (
            <li key={course._id}>
              <h3>{course.title}</h3>
              <p>{course.price}</p>
              <img src={course.imageUrl} alt={course.title} width="100" />
              <Link to={`/edit-course/${course._id}`}>Edit</Link>
              <button onClick={() => handleDelete(course._id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CourseList;
