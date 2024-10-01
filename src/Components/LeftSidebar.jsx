// src/Components/LeftSidebar.js

import React from 'react';
import { Card } from 'react-bootstrap';

const LeftSidebar = ({ user }) => {
  return (
    <div className="left-sidebar">
      <Card>
        <Card.Img variant="top" src={user.profilePicture} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle>
          <Card.Text>{user.bio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeftSidebar;
