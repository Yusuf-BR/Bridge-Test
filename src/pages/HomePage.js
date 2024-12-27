// src/pages/HomePage.js
import React from "react";
import CourseList from "../components/CourseList";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Admin Panel</h1>
      <CourseList />
    </div>
  );
};

export default HomePage;
