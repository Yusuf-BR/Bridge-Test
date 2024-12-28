import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { getCourses } from '../api/courseAPI'; // Fetch courses from backend

const LandingPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses(); // Fetch courses from the backend API
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7W1LM-6DeaBLF-E60ygBQGsH00NOkdbjeg&s"
          alt="Company Logo"
        />
        <h3>The Bridge</h3>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Improve your skills on your own</h1>
            <p>To prepare for a better future</p>
            <button className="button">REGISTER NOW</button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Discover Our Courses</h2>
        <div className="course-list">
          {loading ? (
            <p>Loading courses...</p>
          ) : courses.length === 0 ? (
            <p>No courses available</p>
          ) : (
            courses.map((course) => (
              <div key={course._id} className="course-item">
                <h3>{course.title}</h3>
                <img
                  src={course.imageUrl || 'https://via.placeholder.com/300x200'}
                  alt={course.title}
                  width="300"
                  height="200"
                />
                <p>{course.price}dt/ Month</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send the message</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;