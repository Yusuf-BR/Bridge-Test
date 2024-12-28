import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

// Light red and yellow color scheme
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #F28D8D, #F7DC6F)", // Light red and light yellow gradient
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
    backgroundSize: "cover",
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "40px 50px",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "450px",
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#D94F4F", // Light red color
    marginBottom: "30px",
  },
  formItem: {
    marginBottom: "25px",
  },
  input: {
    backgroundColor: "#F7DC6F", // Light yellow for inputs
    borderColor: "#F28D8D", // Light red border
    borderRadius: "10px",
    color: "#D94F4F", // Red text
    padding: "12px 18px",
    fontSize: "1.1rem",
    width: "100%",
    transition: "all 0.3s ease",
    boxShadow: "none",
  },
  button: {
    background: "#F28D8D", // Light red background for the button
    border: "none",
    padding: "12px 30px",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#fff",
    borderRadius: "25px",
    marginTop: "20px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    width: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added smooth transition for scaling and shadow
  },
  buttonHover: {
    transform: "scale(1.05)", // Subtle scaling effect on hover
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)", // Glowing shadow on hover
  },
};

// Login Page Component
const LoginPage = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const { username, password } = values;

    setLoading(true); // Start loading when the login process begins

    if (username === "admin" && password === "admin") {
      message.success("Login successful!");
      onLogin(); // Call the onLogin function passed as a prop
      navigate("/"); // Redirect to HomePage
    } else {
      message.error("Invalid credentials!");
    }

    setLoading(false); // Stop loading after login attempt
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Login</h2>
        <Form onFinish={handleLogin}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            style={styles.formItem}
          >
            <Input
              placeholder="Enter username"
              style={styles.input}
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            style={styles.formItem}
          >
            <Input.Password
              placeholder="Enter password"
              style={styles.input}
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={styles.button}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)"; // Apply scale on hover
                e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.3)"; // Apply shadow on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"; // Reset scale
                e.target.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)"; // Reset shadow
              }}
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
