import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom>
            DanJan Creative
            <br />
            <span style={{ color: '#666' }}>Sanjana Jain</span>
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: '800px', mt: 4 }}>
            I am a multi-disciplinary creative. I am working on merging movement and technology through the web application called Qalira.
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Home; 