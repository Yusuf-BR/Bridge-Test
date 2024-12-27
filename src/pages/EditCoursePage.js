// src/pages/EditCoursePage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourses } from "../api/courseAPI";
import CourseForm from "../components/CourseForm";

const EditCoursePage = () => {
  const { id } = useParams();
  const [courseToEdit, setCourseToEdit] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const courses = await getCourses();
      const course = courses.find((course) => course._id === id);
      setCourseToEdit(course);
    };

    fetchCourse();
  }, [id]);

  return (
    <div>
      {courseToEdit ? (
        <CourseForm courseToEdit={courseToEdit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditCoursePage;
