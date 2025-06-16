import { Container, Grid, Typography, Box } from '@mui/material';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Movement Studies',
      description: 'Learn how to build modern web applications using React and Material UI framework. We will cover the basics and best practices.',
      date: '2024-04-15',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498',
      slug: 'getting-started-with-movement-studies'
    },
    {
      id: 2,
      title: 'Getting Started with React and Material UI',
      description: 'Deep dive into CSS Grid Layout and learn how to create complex layouts with ease. Includes practical examples.',
      date: '2024-03-10',
      image: 'https://source.unsplash.com/random/800x600?coding',
      slug: 'mastering-css-grid'
    },
    {
      id: 3,
      title: 'Web Development Trends 2024',
      description: 'Explore the latest trends in web development and stay ahead of the curve. From AI integration to new frameworks.',
      date: '2024-03-05',
      image: 'https://source.unsplash.com/random/800x600?technology',
      slug: 'web-development-trends-2024'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="h2" color="text.secondary">
          Thoughts, stories and ideas.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <BlogCard {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog; 