import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const tiers = [
  {
    title: 'Starter',
    price: '24',
    description: 'Perfect for freelancers just starting out',
    features: [
      'All Templates',
      'Unlimited Clients',
      'Invoicing & Payments',
      'Proposals & Contracts',
      'Task Tracking',
      'Basic Support',
    ],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Professional',
    subheader: 'Most Popular',
    price: '39',
    description: 'Everything you need to grow your business',
    features: [
      'Everything in Starter, plus:',
      'Custom Branding',
      'Client CRM',
      'Advanced Reports',
      'Team Management',
      'Priority Support',
    ],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Business',
    price: '79',
    description: 'For larger teams and agencies',
    features: [
      'Everything in Professional, plus:',
      'White Labeling',
      'Advanced Automation',
      'API Access',
      'Dedicated Account Manager',
      'Custom Training',
    ],
    buttonText: 'Contact Sales',
  },
]

const Pricing = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          Simple, transparent pricing
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          No hidden fees. Cancel anytime.
        </Typography>
        <Grid container spacing={4} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} md={4}>
              <Card
                sx={{
                  border: '2px solid #F9572F',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center', fontWeight: 'bold' }}
                  subheaderTypographyProps={{
                    borderRadius: '20px',
                    bgcolor: '#F9572F',
                    align: 'center',
                    color: 'white',
                    display: 'inline-block',
                    p: '3px 10px',
                  }}
                  sx={{
                    bgcolor: tier.subheader ? 'primary.50' : 'transparent',
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" fontWeight="bold">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ fontStyle: 'italic', mb: 3 }}
                  >
                    {tier.description}
                  </Typography>
                  {tier.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        py: 1,
                      }}
                    >
                      <CheckIcon sx={{ color: '#F9572F', mr: 1 }} />
                      <Typography variant="body1">{feature}</Typography>
                    </Box>
                  ))}
                </CardContent>
                <CardActions sx={{ p: 2, mt: 'auto' }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      bgcolor: '#F9572F',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                    }}
                    size="large"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Pricing
