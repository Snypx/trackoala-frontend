import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'

import '@fontsource/inter/400.css' // Thin
import '@fontsource/inter/500.css' // Regular
import '@fontsource/inter/700.css' // Bold
import HeroSection from './components/Hero'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import CallToAction from './components/CallToAction'
import Newsletter from './components/Newsletter'
import WhatWeDo from './components/WhatWeDo'
import Benefits from './components/Benefit'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  // palette: {
  //   customPrimary: {
  //     main: '#F9572F', // Your custom primary color
  //   },
  //   customSecondary: {
  //     main: '#959D9E', // Your custom secondary color
  //   },
  // },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box width="100%" height="100%">
        <Navbar />
        <HeroSection />
        <WhatWeDo />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Faq />
        <Newsletter />
        <CallToAction />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
