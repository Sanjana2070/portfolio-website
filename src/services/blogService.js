const API_URL = 'http://localhost:3000';

export const fetchPostBySlug = async (slug) => {
  const response = await fetch(`${API_URL}/posts?slug=${slug}`);
  const posts = await response.json();
  return posts[0] || null;
};

export const fetchAllPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return await response.json();
};