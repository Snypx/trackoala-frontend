import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import logo from '../assets/Trackola.svg'
import useIsMobile from '../hooks/isMobile'

const Navbar = () => {
  const isMobile = useIsMobile()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLogin = () => {
    window.location.href = 'https://app.trackoala.com/login'
  }

  const navItems = [
    { text: 'Demos', link: '#' },
    { text: 'Blog', link: '#' },
    { text: 'All Pages', link: '#' },
    { text: 'About Us', link: '#' },
    { text: 'Contact', link: '#' },
  ]

  const DesktopNavbar = () => (
    <Box>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          width: '100%',
          // m: 'auto',
          bgcolor: 'white',
        }}
      >
        <Toolbar
          sx={{
            width: '75dvw',
            m: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
            padding: '0 24px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Trackoala"
              style={{ height: '60px', marginRight: '16px' }}
            />
          </Box>
          <Box display="flex" gap={2.5}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: 'black' }}>
                {item.text}
              </Button>
            ))}
          </Box>
          <Box display="flex" gap={1}>
            <Button
              variant="text"
              sx={{ color: 'black' }}
              onClick={handleLogin}
            >
              Log In
            </Button>
            {/* <Button
              variant="outlined"
              sx={{ color: 'black', borderRadius: '8px' }}
            >
              Book demo
            </Button> */}
            <Button
              variant="contained"
              sx={{
                bgcolor: '#F9572F',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#008D8F', // Change background color on hover
                  transform: 'scale(1.05)', // Slight scaling effect
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
    </Box>
  )

  const MobileNavbar = () => (
    <Box sx={{ width: '100%' }}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          width: '100%',
          bgcolor: 'white',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
            padding: '0 24px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Trackoala"
              style={{ height: '60px', marginRight: '14px' }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
            }}
          >
            <img
              src={logo}
              alt="Trackoala"
              style={{ height: '45px', width: '45px' }}
            />
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    px: 2,
                    color: 'black',
                  }}
                  onClick={handleDrawerToggle}
                >
                  {item.text}
                </Button>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              p: 2,
              mt: 'auto',
            }}
          >
            <Button
              variant="text"
              sx={{ color: 'black' }}
              onClick={handleLogin}
            >
              Log In
            </Button>
            <Button variant="outlined" sx={{ color: 'black' }}>
              Book demo
            </Button>
            <Button variant="contained" sx={{ bgcolor: '#F9572F' }}>
              Start now
            </Button>
          </Box>
        </Drawer>
      </AppBar>
      <Toolbar />
    </Box>
  )

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />
}

export default Navbar
