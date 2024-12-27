// src/pages/AdminPage.js
import React, { useState } from "react";
import CourseList from "./pages/components/CourseList";
import CourseForm from "./pages/components/CourseForm";

const AdminPage = () => {
  const [courseToEdit, setCourseToEdit] = useState(null);

  const handleEdit = (course) => {
    setCourseToEdit(course);
  };

  const handleSave = () => {
    setCourseToEdit(null);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <CourseForm courseToEdit={courseToEdit} onSave={handleSave} />
      <CourseList onEdit={handleEdit} />
    </div>
  );
};

export default AdminPage;
