// src/Components/RightSidebar.js
import React from 'react';
import { Card } from 'react-bootstrap';

const RightSidebar = ({ suggestions }) => {
  return (
    <div>
      <h4>Suggestions for you</h4>
      {suggestions.map(suggestion => (
        <Card key={suggestion.id} className="mb-2">
          <Card.Body>
            <Card.Title>{suggestion.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">@{suggestion.username}</Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RightSidebar;
