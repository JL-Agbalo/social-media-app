// src/Components/Feed.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Feed = () => {
  // Mock data for user details and suggestions
  const user = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    bio: 'Lorem ipsum dolor sit amet.',
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL
  };

  const suggestions = [
    { id: 2, name: 'Jane Smith', username: 'janesmith' },
    { id: 3, name: 'Emily Johnson', username: 'emilyj' },
    { id: 4, name: 'Michael Brown', username: 'mikeb' },
  ];

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <LeftSidebar user={user} />
        </Col>
        <Col md={6}>
          <h2>Feed</h2>
          {/* Add feed content here */}
        </Col>
        <Col md={3}>
          <RightSidebar suggestions={suggestions} />
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
