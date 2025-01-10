import { Box, Button, Container, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'

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
        // height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 5,
      }}
    >
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
            The ultimate workflow solution
          </Typography>
          <Box maxWidth="sm" m="auto">
            <Typography variant="h6" gutterBottom>
              Is your team struggling with missed deadlines? Let Trackoala help
              you streamline your workflow and boost productivity.
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
      <Box
        sx={{
          bgcolor: '#f4f2f0',
          width: '60%',
          margin: '40px auto',
          padding: '24px 0',
          borderRadius: '10px',
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          centered
          textColor="inherit"
          TabIndicatorProps={{
            sx: { display: 'none' }, // Hide the indicator line
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
              bgcolor: activeTab === 0 ? '#0F0F0F' : 'transparent', // Change background color when active
              borderRadius: '15px',
              fontWeight: activeTab === 0 ? 'bold' : 'normal',
              color: '#FFFFFF',
            }}
          />
          <Tab
            label="Project Management"
            sx={{
              bgcolor: activeTab === 1 ? '#2f2e2c' : 'transparent', // Change background color when active
              borderRadius: '15px',
              fontWeight: activeTab === 1 ? 'bold' : 'normal',
              color: '#FFFFFF',
            }}
          />
          <Tab
            label="Workflow Automation"
            sx={{
              bgcolor: activeTab === 2 ? '#2f2e2c' : 'transparent', // Change background color when active
              borderRadius: '15px',
              fontWeight: activeTab === 2 ? 'bold' : 'normal',
              color: '#FFFFFF',
            }}
          />
        </Tabs>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30dvh',
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

const InventoryManagementImage = () => {
  return <img src="/api/placeholder/400/320" alt="Inventory Management" />
}

const ProjectManagementImage = () => {
  return <img src="/api/placeholder/400/320" alt="Project Management" />
}

const WorkflowAutomationImage = () => {
  return <img src="/api/placeholder/400/320" alt="Workflow Automation" />
}

export default HeroSection
