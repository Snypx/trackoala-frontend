import { Box, Button, Container, Typography } from '@mui/material'

import dashboard from '../assets/10.png'

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 10,
      }}
    >
      {/* Header content remains the same */}
      <Container maxWidth="md">
        <Box
          gap={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{ borderRadius: 5, bgcolor: '#008D8F', p: '4px 16px' }}>
            <Typography variant="h6" sx={{ color: 'white' }}>
              #1 business management app
            </Typography>
          </Box>

          <Typography variant="h2" gutterBottom>
            One platform to streamline your entire business
          </Typography>
          <Box maxWidth="md" m="auto">
            <Typography variant="h6" gutterBottom>
              Is your team struggling with missed deadlines? <br />
              Streamline your workflow and boost productivity with our help.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              variant="outlined"
              // color="primary"
              sx={{
                padding: '12px 24px',
                borderRadius: '8px',
                borderColor: '#008D8F', // Custom border color
                color: '#008D8F',
              }}
            >
              Learn More
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: '12px 24px',
                backgroundColor: '#F9572F',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#008D8F', // Change background color on hover
                  transform: 'scale(1.05)', // Slight scaling effect
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
              Try for Free
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: '#f4f2f0',
          width: '60%',
          margin: '60px auto 0',
          padding: '24px 0',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={dashboard} alt="dashboard" style={imageStyle} />
      </Box>
    </Box>
  )
}

// Updated image components with consistent sizing
const imageStyle = {
  width: '95%',
  height: '100%',
  objectFit: 'cover' as const,
  borderRadius: '5px',
}

export default HeroSection
