import { Box, Button, Container, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import inventory from '../assets/inven.jpg'
import project from '../assets/project.jpg'
import workflow from '../assets/workflow.jpg'

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setActiveTab(newValue)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 5,
      }}
    >
      {/* Header content remains the same */}
      <Container maxWidth="md">
        <Box
          gap={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" gutterBottom>
            The Ultimate Workflow Solution
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
              color="primary"
              sx={{ padding: '12px 24px', borderRadius: '8px' }}
            >
              Book demo
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: '12px 24px',
                backgroundColor: '#F9572F',
                borderRadius: '8px',
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Fixed grey box container */}
      <Box
        sx={{
          bgcolor: '#f4f2f0',
          width: '60%',
          margin: '40px auto',
          padding: '24px 0',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          centered
          textColor="inherit"
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
          sx={{
            bgcolor: '#989796',
            width: '70%',
            margin: '0px auto',
            borderRadius: '15px',
          }}
        >
          <Tab
            label="Inventory Management"
            sx={{
              bgcolor: activeTab === 0 ? '#0F0F0F' : 'transparent',
              borderRadius: '15px',
              fontWeight: activeTab === 0 ? 'bold' : 'normal',
              color: '#FFFFFF',
            }}
          />
          <Tab
            label="Project Management"
            sx={{
              bgcolor: activeTab === 1 ? '#2f2e2c' : 'transparent',
              borderRadius: '15px',
              fontWeight: activeTab === 1 ? 'bold' : 'normal',
              color: '#FFFFFF',
            }}
          />
          <Tab
            label="Workflow Automation"
            sx={{
              bgcolor: activeTab === 2 ? '#2f2e2c' : 'transparent',
              borderRadius: '15px',
              fontWeight: activeTab === 2 ? 'bold' : 'normal',
              color: '#FFFFFF',
            }}
          />
        </Tabs>

        {/* Fixed image container */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '400px', // Fixed height instead of dvh
            overflow: 'hidden', // Contain oversized images
          }}
        >
          {activeTab === 0 && <InventoryManagementImage />}
          {activeTab === 1 && <ProjectManagementImage />}
          {activeTab === 2 && <WorkflowAutomationImage />}
        </Box>
      </Box>

      <Box maxWidth="sm" m="auto" textAlign="center" sx={{ pb: 5 }}>
        <Typography variant="h4" gutterBottom>
          Trusted by thousands of agencies and consulting firms
        </Typography>
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

const InventoryManagementImage = () => {
  return <img src={inventory} alt="Inventory Management" style={imageStyle} />
}

const ProjectManagementImage = () => {
  return <img src={project} alt="Project Management" style={imageStyle} />
}

const WorkflowAutomationImage = () => {
  return <img src={workflow} alt="Workflow Automation" style={imageStyle} />
}

export default HeroSection
