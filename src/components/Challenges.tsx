import { useState } from 'react'
import { Box, Container, Typography, Grid, List } from '@mui/material'

const challenges = [
  {
    title: 'Lack of Workflow Clarity',
    problem:
      'Businesses struggle to track tasks and processes from start to finish, leading to missed deadlines and miscommunications.',
    solution:
      'Trackoala provides a clear, centralized platform to organize and monitor every step of the workflow.',
  },
  {
    title: 'Manual and Disorganized Inventory Management',
    problem:
      'Managing inventory through spreadsheets or manual methods leads to errors, lost data, and stock discrepancies.',
    solution:
      'Trackoala automates inventory tracking, integrates supplier information, and provides real-time updates on stock levels.',
  },
  {
    title: 'Inefficient Team Collaboration',
    problem:
      'Teams working on multiple projects often face poor communication, duplicated efforts, and unclear responsibilities.',
    solution:
      'Trackoala offers tools for task assignments, progress tracking, and real-time updates to ensure everyone stays on the same page.',
  },
  {
    title: 'Managing Drawings and Revisions',
    problem:
      'Storing, sharing, and tracking revisions of technical drawings can result in confusion and delays.',
    solution:
      'Trackoala centralizes drawing management, making revisions and approvals seamless and transparent.',
  },
  {
    title: 'Production and Fabrication Delays',
    problem:
      'Miscommunication and poor resource allocation during production stages cause bottlenecks.',
    solution:
      'Trackoala tracks production milestones, assigns materials to jobs, and ensures smooth transitions between stages.',
  },
  {
    title: 'Delivery and Installation Mismanagement',
    problem:
      'Late deliveries and uncoordinated installations lead to customer dissatisfaction.',
    solution:
      'Trackoala streamlines delivery tracking, automates packing labels, and manages installation assignments.',
  },
  {
    title: 'Overwhelming Complexity in Managing Large-Scale Projects',
    problem:
      'Businesses with multiple ongoing projects face difficulties in consolidating information, leading to inefficiencies.',
    solution:
      'Trackoala offers a unified platform for managing multiple projects, resources, and teams without chaos.',
  },
]

export default function Challenges() {
  const [activeChallenge, setActiveChallenge] = useState(0)

  return (
    <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
      <Container
        maxWidth="lg"
        sx={{ bgcolor: 'white', padding: '24px 0', borderRadius: '10px' }}
      >
        <Grid container spacing={8}>
          {/* Left side content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 4,
                p: 4,
              }}
            >
              <Box
                sx={{
                  borderRadius: 5,
                  bgcolor: '#008D8F',
                  p: '4px 16px',
                  display: 'inline-block',
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: 'white' }}>
                  Challenges
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
                From disorganization to efficiency, Trackoala delivers clarity.
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Here is what we solve:
              </Typography>
              <List sx={{ mt: 4 }}>
                {challenges.map((challenge, index) => (
                  <Box
                    key={index}
                    onMouseEnter={() => setActiveChallenge(index)}
                    sx={{
                      cursor: 'pointer',
                      py: 2,
                      borderBottom: '1px solid',
                      borderColor: '#F9572F',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: '#F9572F',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          activeChallenge === index
                            ? '#F9572F'
                            : 'text.primary',
                        fontWeight: activeChallenge === index ? 800 : 600,
                      }}
                    >
                      {challenge.title}
                    </Typography>
                  </Box>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Right side content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                pl: 4,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="#F9572F"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  Problem:
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  {challenges[activeChallenge].problem}
                </Typography>
                <Typography
                  variant="h6"
                  color="#F9572F"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  Solution:
                </Typography>
                <Typography variant="h5">
                  {challenges[activeChallenge].solution}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
