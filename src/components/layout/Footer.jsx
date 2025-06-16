import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { YouTube } from '@mui/icons-material';
const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton 
              href="https://github.com/Sanjana2070" 
              target="_blank"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              href="https://www.linkedin.com/in/janis-sanjana-jain/" 
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/channel/UCJqInQsdWzMISm3cUq18mGg"
              target="_blank"
              color="inherit"
            >
              <YouTube />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 