import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Freelance Designer',
    avatar: 'https://i.pravatar.cc/150?img=1',
    quote:
      'This platform has transformed how I manage my freelance business. The automated invoicing saves me hours every week.',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Consultant',
    avatar: 'https://i.pravatar.cc/150?img=2',
    quote:
      'The contract templates and e-signing features have made my client onboarding process completely seamless.',
  },
  {
    name: 'Emma Davis',
    role: 'Web Developer',
    avatar: 'https://i.pravatar.cc/150?img=3',
    quote:
      'Ive tried many business management tools, but this is by far the most comprehensive and user-friendly solution.',
  },
]

const Testimonials = () => {
  return (
    <Box sx={{ py: 12, bgcolor: '#F5F3F0' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 8, fontWeight: 'bold' }}
        >
          Loved by freelancers worldwide
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s',
                  },
                }}
              >
                <CardContent>
                  <FormatQuoteIcon
                    sx={{ fontSize: 40, color: '#F9572F', mb: 2 }}
                  />
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ mb: 4, height: '100px' }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.avatar}
                      sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 'bold' }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
