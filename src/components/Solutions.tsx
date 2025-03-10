import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import inventory from '../assets/inven.jpg'
import project from '../assets/project.jpg'
import workflow from '../assets/workflow.jpg'

const Solutions = () => {
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
        alignItems: 'center',
        textAlign: 'center',
        mt: 5,
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
          Solutions
        </Typography>
      </Box>
      <Box maxWidth="md" m="auto">
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold' }}>
          Work smarter by keeping everything in one place & track easily
        </Typography>
      </Box>
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
              bgcolor: activeTab === 0 ? '#F9572F' : 'transparent',
              borderRadius: '15px',
              fontWeight: activeTab === 0 ? 'bold' : 'normal',
              color: '#FFFFFF !important',
            }}
          />
          <Tab
            label="Project Management"
            sx={{
              bgcolor: activeTab === 1 ? '#F9572F' : 'transparent',
              borderRadius: '15px',
              fontWeight: activeTab === 1 ? 'bold' : 'normal',
              color: '#FFFFFF !important',
            }}
          />
          <Tab
            label="Workflow Automation"
            sx={{
              bgcolor: activeTab === 2 ? '#F9572F' : 'transparent',
              borderRadius: '15px',
              fontWeight: activeTab === 2 ? 'bold' : 'normal',
              color: '#FFFFFF !important',
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

      <Box maxWidth="md" m="auto" textAlign="center" sx={{ pb: 5 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Join 50+ other leading businesses today.
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
          Try 15 days for free
        </Button>
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

export default Solutions
