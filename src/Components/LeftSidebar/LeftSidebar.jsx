// src/Components/LeftSidebar.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import './LeftSidebar.css'; // Create this CSS file for styles

const LeftSidebar = ({ user }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <div className="profile-picture">
          <img src={user.profilePicture} alt={user.name} />
        </div>
        <h5>{user.name}</h5>
        <p>@{user.username}</p>
        <p>{user.bio}</p>
      </Card.Body>
    </Card>
  );
};

export default LeftSidebar;
