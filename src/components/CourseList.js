// src/components/CourseList.js
import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../api/courseAPI";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    await deleteCourse(id);
    setCourses(courses.filter(course => course._id !== id)); // Update the list
  };

  return (
    <div>
      <h2>Course List</h2>
      <Link to="/add-course">Add New Course</Link>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.price}</p>
            <img src={course.imageUrl} alt={course.title} width="100" />
            <Link to={`/edit-course/${course._id}`}>Edit</Link>
            <button onClick={() => handleDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
