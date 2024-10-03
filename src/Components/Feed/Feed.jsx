// src/Components/Feed.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSIdebar/RightSidebar';
import Post from '../Post/Post';
import PostFeed from '../PostFeed/PostFeed';

const Feed = () => {
  const user = {
    id: 1,
    name: 'Fish Da',
    username: 'fishda@gmail.com',
    bio: 'Lorem ipsum dolor sit amet.',
    profilePicture: 'https://via.placeholder.com/150',
  };

  const suggestions = [
    { id: 2, name: 'Jane Smith', username: 'janesmith' },
    { id: 3, name: 'Emily Johnson', username: 'emilyj' },
    { id: 4, name: 'Michael Brown', username: 'mikeb' },
  ];

  // Sample posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      image: 'https://via.placeholder.com/600x400',
      content: 'This is the content of the first post.',
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      title: 'Second Post',
      image: 'https://via.placeholder.com/600x400',
      content: 'This is the content of the second post.',
      likes: 0,
      comments: [],
    },
  ]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the top of the posts array
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <LeftSidebar user={user} />
        </Col>
        <Col md={6}>
          <PostFeed onNewPost={handleNewPost} /> {/* Add PostFeed component here */}
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Col>
        <Col md={3}>
          <RightSidebar suggestions={suggestions} />
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
