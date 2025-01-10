import { Box, Container, Typography, Grid } from '@mui/material'

interface BenefitItemProps {
  metric: string
  title: string
  description: string
}

function BenefitItem({ metric, title, description }: BenefitItemProps) {
  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          fontWeight: 'bold',
          color: '#F9572F',
        }}
      >
        {metric}
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Box>
  )
}

const benefits = [
  {
    metric: '30%',
    title: 'Reduce Project Delays',
    description: 'Keep your projects on track and meet deadlines consistently.',
  },
  {
    metric: '50%',
    title: 'Increase Productivity',
    description: 'Automate workflows and eliminate manual tasks.',
  },
  {
    metric: '24/7',
    title: 'Real-time Updates',
    description: 'Stay informed with instant notifications and updates.',
  },
]

const Benefits = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          Benefits of Our Services
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          See how Trackoala can transform your workflow and boost productivity.
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BenefitItem {...benefit} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Benefits
