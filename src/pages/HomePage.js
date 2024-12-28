// src/pages/HomePage.js
import React from "react";
import { Layout, Typography } from "antd";
import CourseList from "../components/CourseList";

const { Title } = Typography;
const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      {/* Main Content */}
      <Content
        style={{
          padding: "40px 50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
        }}
      >
        {/* Centered Title */}
        <Title
          level={1}
          style={{
            color: "#D6B800", // A good shade of yellow
            textAlign: "center",
            fontSize: "48px", // Large title size
            fontWeight: "bold",
            marginBottom: "20px", // Space between title and content
          }}
        >
          9antra-TheBridge Admin Panel
        </Title>

        {/* Course List */}
        <CourseList />
      </Content>
    </Layout>
  );
};

export default HomePage;
