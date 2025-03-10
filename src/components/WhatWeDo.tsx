import { Box, Container, Typography, Grid } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GroupsIcon from '@mui/icons-material/Groups'

interface WhatWeDoItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function WhatWeDoItem({ icon, title, description }: WhatWeDoItemProps) {
  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Box sx={{ color: '#F9572F', mb: 2 }}>{icon}</Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Box>
  )
}

const items = [
  {
    icon: <BarChartIcon sx={{ fontSize: 48 }} />,
    title: 'Track Everything',
    description:
      'Keep track of inventory, projects, and resources all in one place.',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 48 }} />,
    title: 'Save Time',
    description: 'Automate repetitive tasks and focus on what matters most.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    title: 'Collaborate',
    description: 'Work seamlessly with your team, no matter where they are.',
  },
]

const WhatWeDo = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
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
          See how Trackoala can transform your workflow and boost productivity
        </Typography>
        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <WhatWeDoItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default WhatWeDo
