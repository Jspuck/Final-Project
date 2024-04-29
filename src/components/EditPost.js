import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPost, updatePost } from '../api';

function EditPost() {
  const [postData, setPostData] = useState({ title: '', content: '', imageUrl: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost(id)
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePost(id, postData)
      .then(() => {
        navigate('/'); // Navigate to the homepage after updating
        alert('Post updated successfully!');
      })
      .catch(error => console.error('Error updating post:', error));
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
      <button type="submit">Update Post</button>
    </form>
  );
}

export default EditPost;
