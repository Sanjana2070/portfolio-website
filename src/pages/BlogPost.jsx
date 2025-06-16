import { Container, Typography, Box, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostBySlug } from '../services/blogService';
import { useState, useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await fetchPostBySlug(slug);
        setPost(data);
      } catch (error) {
        setError(error.message);
        // Optionally redirect to blog page or show error message
        navigate('/blog', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Button 
          onClick={() => navigate('/blog')}
          sx={{ mb: 2 }}
        >
          ← Back to Blog
        </Button>
        
        <img 
          src={post.image} 
          alt={post.title}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
        />

        <Typography variant="h1" gutterBottom>
          {post.title}
        </Typography>

        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          gutterBottom
          sx={{ mb: 4 }}
        >
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Typography>

        <Box 
          sx={{ mt: 4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Box>
    </Container>
  );
};

export default BlogPost; 