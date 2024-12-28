import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

// Refined Luxurious Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #8E44AD, #F39C12)", // Smooth gradient blend
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
    backgroundSize: "cover",
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  content: {
    backgroundColor: "#2C3E50",
    borderRadius: "25px",
    padding: "40px 50px",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.25)",
    width: "100%",
    maxWidth: "450px",
    animation: "fadeIn 1s ease-out",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#F1C40F", // Bold golden color for warmth
    marginBottom: "40px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)", // Soft glowing text
  },
  formItem: {
    marginBottom: "20px",
  },
  input: {
    backgroundColor: "#34495E",
    borderColor: "#F1C40F",
    borderRadius: "10px",
    color: "#fff",
    padding: "12px 18px",
    fontSize: "1.1rem",
    width: "100%",
    transition: "all 0.3s ease",
    boxShadow: "none",
  },
  inputFocus: {
    borderColor: "#F39C12",
    boxShadow: "0 0 5px rgba(243, 156, 18, 0.7)", // Smooth focus transition
  },
  button: {
    background: "linear-gradient(45deg, #F39C12, #8E44AD)", // Dynamic gradient button
    border: "none",
    padding: "12px 30px",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#fff",
    borderRadius: "25px",
    marginTop: "20px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
  },
  buttonHover: {
    transform: "scale(1.05)", // Subtle scaling effect
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)", // Glowing shadow
    background: "linear-gradient(45deg, #8E44AD, #F39C12)", // Hover gradient effect
  },
};

// Login Page Component
const LoginPage = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const { username, password } = values;

    if (username === "admin" && password === "admin") {
      message.success("Login successful!");
      onLogin(); // Set authentication to true
      navigate("/"); // Redirect to HomePage
    } else {
      message.error("Invalid credentials!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Admin Portal</h2>
        <Form onFinish={handleLogin}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
            style={styles.formItem}
          >
            <Input
              placeholder="Enter username"
              style={styles.input}
              autoComplete="off"
              onFocus={(e) => (e.target.style = { ...styles.input, ...styles.inputFocus })}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
            style={styles.formItem}
          >
            <Input.Password
              placeholder="Enter password"
              style={styles.input}
              autoComplete="off"
              onFocus={(e) => (e.target.style = { ...styles.input, ...styles.inputFocus })}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={styles.button}
              onMouseEnter={(e) => (e.target.style = { ...styles.button, ...styles.buttonHover })}
              onMouseLeave={(e) => (e.target.style = styles.button)}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
