import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse, updateCourse } from "../api/courseAPI";
import { Layout, Menu, Form, Input, Button, Typography, message } from "antd";
import { UnorderedListOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const { Title } = Typography;
const { Header, Content } = Layout;

const CourseForm = ({ courseToEdit }) => {
  const navigate = useNavigate(); // useNavigate replaces useHistory

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      if (courseToEdit) {
        // Update course data
        await updateCourse(courseToEdit._id, values);
        message.success("Course updated successfully!");
      } else {
        // Create new course
        await createCourse(values);
        message.success("Course added successfully!");
      }

      // Redirect to home page after submission
      navigate("/");
    } catch (error) {
      message.error("An error occurred, please try again.");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Horizontal Navbar */}
      <Header style={{ background: "#fff", padding: 0 }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '18px', // Enlarging font size
          }}
        >
          <Menu.Item
            key="1"
            icon={<UnorderedListOutlined />}
            style={{
              color: "#6A4C7C", // Majestic purple color
              fontWeight: 'bold',
              fontSize: '20px', // Larger font size for the menu items
            }}
            hoverStyle={{
              color: "#D6B800", // Hover color effect
            }}
          >
            {/* Replaced anchor tag with Link for client-side navigation */}
            <Link to="/">Course List</Link>
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={<PlusCircleOutlined />}
            style={{
              color: "#6A4C7C", // Majestic purple color
              fontWeight: 'bold',
              fontSize: '20px', // Larger font size for the menu items
            }}
            hoverStyle={{
              color: "#D6B800", // Hover color effect
            }}
          >
            {/* Replaced anchor tag with Link for client-side navigation */}
            <Link to="/add-course">Add/Update Course</Link> {/* Updated text */}
          </Menu.Item>
        </Menu>
      </Header>

      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            backgroundColor: "#f0f2f5",
          }}
        >
          <Title level={2} style={{ color: "#6A4C7C" }}>
            {courseToEdit ? "Update Course" : "Add Course"} {/* Updated title */}
          </Title>

          <Form
            layout="vertical"
            onFinish={handleSubmit} // Handles form submission
            style={{ maxWidth: "600px", margin: "0 auto" }}
            initialValues={{
              title: courseToEdit ? courseToEdit.title : "",
              price: courseToEdit ? courseToEdit.price : "",
              imageUrl: courseToEdit ? courseToEdit.imageUrl : "",
            }}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input placeholder="Enter course title" />
            </Form.Item>

            <Form.Item
              label="Price (DT/month)"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
            >
              <Input type="number" placeholder="Enter price" />
            </Form.Item>

            <Form.Item
              label="Image URL"
              name="imageUrl"
              rules={[{ required: true, message: "Please input the image URL!" }]}
            >
              <Input placeholder="Enter image URL" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#D6B800",
                  borderColor: "#D6B800",
                  width: "100%",
                }}
              >
                {courseToEdit ? "Update" : "Add"} Course {/* Updated button text */}
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CourseForm;
