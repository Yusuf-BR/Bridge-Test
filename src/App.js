import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddCoursePage from "./pages/AddCoursePage";
import EditCoursePage from "./pages/EditCoursePage";
import LoginPage from "./pages/LoginPage"; // Import the LoginPage component
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle login success by setting authentication to true
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Redirect user to HomePage if authenticated, else to LoginPage */}
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />} // Pass handleLogin as a prop to LoginPage
        />
        <Route path="/add-course" element={<AddCoursePage />} />
        <Route path="/edit-course/:id" element={<EditCoursePage />} />
        <Route path="/landing" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
