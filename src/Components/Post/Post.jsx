import React, { useState } from 'react';
import { Card, Button, Form, ListGroup } from 'react-bootstrap';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(post.content);
    // alert('Post content copied to clipboard!');
  };

  const handleShare = () => {
    // alert('Post shared!'); 
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <div className="d-flex justify-content-between mb-3">
          <Button variant="" onClick={handleLike}>
            Like ({likes})
          </Button>
          <Button variant="" onClick={handleCommentSubmit}>
            Comment
          </Button>
          <Button variant="" onClick={handleCopy}>
            Copy
          </Button>
          <Button variant="" onClick={handleShare}>
            Share
          </Button>
        </div>
      </Card.Body>
      <Card.Footer>
        <ListGroup variant="flush">
          {comments.map((commenrdt, index) => (
            <ListGroup.Item key={index}>{commenrdt}</ListGroup.Item>
          ))}
        </ListGroup>
        <Form onSubmit={handleCommentSubmit} className="d-flex">
          <Form.Control
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
            className="me-2"
          />
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Footer>
    </Card>
  );
};

export default Post;
