import axios from 'axios';

const API_URL = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(API_URL, { withCredentials: true });
export const createPost = (newPost) => axios.post(API_URL, newPost, { withCredentials: true });
export const fetchPost = (id) => axios.get(`${API_URL}/${id}`, { withCredentials: true });
export const updatePost = (id, updatedPost) => axios.put(`${API_URL}/${id}`, updatedPost, { withCredentials: true });
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`, { withCredentials: true });
