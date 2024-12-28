import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../api/courseAPI"; // import API functions
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Spin, List, Typography, Layout, Menu } from "antd";
import { DeleteOutlined, EditOutlined, UnorderedListOutlined, PlusCircleOutlined, LogoutOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // To show loading state
  const navigate = useNavigate(); // useNavigate hook for redirecting

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses(); // Fetch courses from API
        setCourses(data); // Set courses in the state
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchCourses();
  }, []);

  // Handle course deletion
  const handleDelete = async (id) => {
    try {
      await deleteCourse(id); // Delete course using API
      setCourses(courses.filter(course => course._id !== id)); // Remove course from state
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    // Here you can clear authentication state if you have any
    // For now, we simply redirect to the login page
    navigate("/login"); // Redirect to login page
  };

  // Render loading state or the course list
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Horizontal Navbar */}
      <Header style={{ background: "#fff", padding: 0 }}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ display: 'flex', justifyContent: 'center', fontSize: '18px' }}>
          <Menu.Item
            key="1"
            icon={<UnorderedListOutlined />}
            style={{
              color: "#6A4C7C", // Majestic purple color
              fontWeight: 'bold',
              fontSize: '20px', // Enlarging font size
            }}
            hoverStyle={{
              color: "#D6B800", // Hover color effect
            }}
          >
            <Link to="/">Home</Link> {/* Changed this to point to the Home page */}
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<PlusCircleOutlined />}
            style={{
              color: "#6A4C7C", // Majestic purple color
              fontWeight: 'bold',
              fontSize: '20px', // Enlarging font size
            }}
            hoverStyle={{
              color: "#D6B800", // Hover color effect
            }}
          >
            <Link to="/add-course">Add/Update Course</Link>
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            style={{
              color: "#D6B800", // Yellow color for logout button
              fontWeight: 'bold',
              fontSize: '20px', // Enlarging font size
            }}
            onClick={handleLogout} // Call handleLogout function on click
          >
            Logout
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
          <Title level={2} style={{ color: "#6A4C7C" }}>Course List</Title>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={courses}
            renderItem={(course) => (
              <List.Item>
                <Card
                  hoverable
                  cover={<img alt={course.title} src={course.imageUrl} />}
                  actions={[
                    <Link to={`/edit-course/${course._id}`}>
                      <Button icon={<EditOutlined />} style={{ borderColor: "#6A4C7C", color: "#6A4C7C" }}>Edit</Button>
                    </Link>,
                    <Button
                      icon={<DeleteOutlined />}
                      danger
                      onClick={() => handleDelete(course._id)}
                      style={{ borderColor: "#D6B800", color: "#D6B800" }}
                    >
                      Delete
                    </Button>
                  ]}
                >
                  <Title level={4} style={{ color: "#6A4C7C" }}>{course.title}</Title>
                  <Paragraph>{course.price} DT/month</Paragraph>
                </Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CourseList;
