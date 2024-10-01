import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Profile = () => {
  const user = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    bio: 'Lorem ipsum dolor sit amet.',
    profilePicture: 'https://via.placeholder.com/150', 
  };

  return (
    <Container fluid className="mt-4">
      <Card>
        <Card.Img variant="top" src={user.profilePicture} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle>
          <Card.Text>{user.bio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
