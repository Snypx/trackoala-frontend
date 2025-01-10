import { Box, Button, Container, Typography } from '@mui/material'

const CallToAction = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: '#F9572F',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
          Ready to streamline your business?
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, opacity: 0.9 }}>
          Join thousands of freelancers and agencies who trust our platform
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: '15px',
            bgcolor: 'white',
            color: 'black',
            px: 6,
            py: 2,
          }}
        >
          Start Your Free Trial
        </Button>
      </Container>
    </Box>
  )
}

export default CallToAction
