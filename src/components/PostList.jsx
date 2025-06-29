import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Data fetching failed');
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'black' }}>{error}</h2>
        <img src="/error-message.png" alt="Error visual" style={{ maxWidth: '100%' }} />
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Posts</h1>
      {posts.slice(0, 10).map(post => (
        <div key={post.id} style={{ marginBottom: '2rem' }}>
          <h2>{post.id}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <img src="/blog-posts.png" alt="Blog visual" style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default PostList;