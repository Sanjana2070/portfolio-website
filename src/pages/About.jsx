import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mt: 4 }}>
            If you're reading this on a website I coded from scratch, hi. 
            It's probably been refactored three times since you opened this tab.
            <br /> <br />
            Currently, I'm deepening my full-stack development skills while building meaningful software that doesn’t just work, but matters. 
            I like clean code, smart APIs, and dashboards that don’t insult the user’s intelligence. 
            
            <br /> <br />
            My stack? JavaScript/TypeScript, React/Next.js, TailwindCSS, MongoDB, Node.js, and enough command-line kung fu to talk to Docker containers like they owe me money. 
            I've recently fallen into the world of DevOps and CI/CD pipelines too, because the best code is the kind that deploys itself.

            <br /><br />

            Outside of building software, I am a dancer and choreographer who loves to travel and explore new cultures. Adventure is in my blood, whether it's skydiving in the United States, or dancing in the streets of Canada. Yes I've done them both.
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default About; 