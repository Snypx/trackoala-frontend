import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import TimelineIcon from '@mui/icons-material/Timeline'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import Benefits from './Benefit'
import chart from '../assets/chart.png'

const steps = [
  {
    icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
    step: 'STEP 1',
    title: 'Organize',
    description:
      'Keep track of inventory, projects, and resources all in one place.',
  },
  {
    icon: <TimelineIcon sx={{ fontSize: 40 }} />,
    step: 'STEP 2',
    title: 'Track',
    description:
      'Keep track of inventory, projects, and resources all in one place.',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    step: 'STEP 3',
    title: 'Deliver',
    description:
      'Keep track of inventory, projects, and resources all in one place.',
  },
]

export default function HowItWorks() {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: 'background.paper',
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
          How It Works
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 8, fontWeight: 'bold' }}
        >
          Start improving productivity with just 3 steps
        </Typography>

        <Grid container spacing={4} sx={{ mb: 12 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  //   height: '',
                  bgcolor: 'grey.50',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography
                  sx={{ mb: 1, fontWeight: 'medium', color: '#F9572F' }}
                >
                  {step.step}
                </Typography>
                <Box sx={{ color: '#F9572F', mb: 1 }}>{step.icon}</Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {step.title}
                </Typography>
                <Typography color="text.secondary">
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mb: 12, bgcolor: '#f4f2f0', p: 4, borderRadius: '10px' }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <Grid item xs={12} lg={6}>
              <Box
                component="img"
                src={chart}
                alt="Dashboard preview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold' }}>
                All in one platform for enhanced control.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                This innovative concept strives to streamline operations to the
                growing users with heightened efficiency and convenience by
                eliminating the need to navigate.
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      bgcolor: '#F9572F',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      '& svg': {
                        color: 'white',
                      },
                    }}
                  >
                    <TimelineIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Real-time updates.
                    </Typography>
                    <Typography color="text.secondary">
                      Real-time updates are a critical feature in various
                      software applications and platforms.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      bgcolor: '#F9572F',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      '& svg': {
                        color: 'white',
                      },
                    }}
                  >
                    <AssignmentIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Project coordination.
                    </Typography>
                    <Typography color="text.secondary">
                      Seamless updates are a critical feature in various
                      software applications and platforms.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Benefits />
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold' }}>
            Start your productive journey
            <br />
            with 7-days free trial.
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Embark on a journey to unparalleled productivity by
            <br />
            seizing the opportunity to kickstart your work with.
          </Typography>
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
            Start 7 Days Free Trial
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
