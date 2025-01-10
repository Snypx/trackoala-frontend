import { useState } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: '#F5F3F0',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          Stay Updated
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, opacity: 0.9 }}>
          Subscribe to our newsletter for the latest features and updates
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            gap: 2,
            maxWidth: 500,
            mx: 'auto',
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              borderRadius: '12px',
              '& .MuiOutlinedInput-root': {
                bgcolor: 'white',
                borderRadius: '12px',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#F9572F', // Border color when focused
                },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              borderRadius: '12px',
              px: 4,
              bgcolor: '#F9572F',
              color: 'white',
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
export default Newsletter
