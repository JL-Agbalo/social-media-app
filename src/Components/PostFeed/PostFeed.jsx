import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import { UserIcon, CameraIcon, VideoIcon, StickerIcon  } from '../Icon/Icons'; // Import your user icon

const PostFeed = () => {
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log('Post submitted:', postContent);
    setPostContent('');
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <InputGroup className="mb-3 pt-2">
          <InputGroup.Text className="bg-transparent border-0">
            <UserIcon />
          </InputGroup.Text>
          <FormControl
            type="text"
            placeholder="What's happening?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="rounded-pill" 
          />
        </InputGroup>

        <div className="d-flex justify-content-between">
          <Button variant="" className="">
           <CameraIcon /> Photo 
          </Button>
          <Button variant="" className="">
           <VideoIcon />  Video
          </Button>
          <Button variant="" className="">
           <StickerIcon /> Stickers
          </Button>
          <Button variant="primary" onClick={handlePostSubmit} className="">
            Post
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostFeed;
