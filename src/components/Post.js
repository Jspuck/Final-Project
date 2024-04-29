import React, { useEffect, useState } from 'react';
import { fetchPost } from '../api';
import { useParams } from 'react-router-dom';

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPost(id)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.content}</p>
      {/* Add more details and interactions as needed */}
    </div>
  );
}

export default Post;
