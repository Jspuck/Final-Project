import React, { useState } from 'react';
import { createPost } from '../api';

function CreatePost() {
  const [postData, setPostData] = useState({ title: '', content: '', imageUrl: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(postData)
      .then(() => {
        setPostData({ title: '', content: '', imageUrl: '' }); // Reset form after submission
        alert('Post created successfully!');
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        value={postData.content}
        onChange={(e) => setPostData({ ...postData, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={postData.imageUrl}
        onChange={(e) => setPostData({ ...postData, imageUrl: e.target.value })}
      />
      <button type="submit">Create Post</button>
    </form> // Ensure the form tag is closed properly here
  );
}

export default CreatePost;
