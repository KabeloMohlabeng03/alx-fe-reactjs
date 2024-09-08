import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams(); // Get dynamic parameter
  return <div>Blog Post with ID: {postId}</div>;
}

export default BlogPost;
