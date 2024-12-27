import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import EditCoursePage from "./pages/EditCoursePage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/add-course" element={<CourseForm />} />
        <Route path="/edit-course/:id" element={<EditCoursePage />} />
      </Routes>
    </Router>
  );
};

export default App;
