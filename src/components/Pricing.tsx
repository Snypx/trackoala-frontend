import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import WhatWeDo from './WhatWeDo'
import { useState } from 'react'

const tiers = [
  {
    title: 'Starter',
    monthlyPrice: '24',
    yearlyPrice: '19',
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
    monthlyPrice: '39',
    yearlyPrice: '32',
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
    monthlyPrice: '79',
    yearlyPrice: '65',
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
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  )

  const handleBillingCycleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newBillingCycle: 'monthly' | 'yearly'
  ) => {
    if (newBillingCycle !== null) {
      setBillingCycle(newBillingCycle)
    }
  }

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: 'grey.50',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          borderRadius: 5,
          bgcolor: '#008D8F',
          p: '4px 16px',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Pricing and Plans
        </Typography>
      </Box>
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
          Only Pay For Modules You Need | No Hidden Fees | Cancel Anytime
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 8,
          }}
        >
          <ToggleButtonGroup
            value={billingCycle}
            exclusive
            onChange={handleBillingCycleChange}
            aria-label="billing cycle"
            sx={{
              bgcolor: '#989796',
              borderRadius: '15px',

              border: 'none',
              '& .MuiToggleButton-root': {
                border: 'none',
                mx: '2px',
                color: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                px: 3,
                py: 1,
                '&:first-of-type': {
                  borderTopLeftRadius: '15px',
                  borderBottomLeftRadius: '15px',
                },
                '&:last-of-type': {
                  borderTopRightRadius: '15px',
                  borderBottomRightRadius: '15px',
                },
                '&.Mui-selected': {
                  bgcolor: '#F9572F',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#F9572F',
                  },
                },
              },
            }}
          >
            <ToggleButton value="monthly">Monthly</ToggleButton>
            <ToggleButton value="yearly">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                Yearly
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.75rem',
                    bgcolor: '#2E7D32',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '15px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Save 20%
                </Typography>
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

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
                      $
                      {billingCycle === 'monthly'
                        ? tier.monthlyPrice
                        : tier.yearlyPrice}
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
                      '&:hover': {
                        backgroundColor: '#008D8F', // Change background color on hover
                        transform: 'scale(1.05)', // Slight scaling effect
                        transition: 'all 0.3s ease-in-out',
                      },
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          mt: 5,
          bgcolor: '#f4f2f0',
          p: '4px 8px',
        }}
      >
        <Typography variant="subtitle2">
          All rates include Taxes. Rest Assured, Your Payments are Safely <br />
          Handled by Stipe, Guaranteeing 100% Data Security
        </Typography>
      </Box>
      <WhatWeDo />
    </Box>
  )
}

export default Pricing
