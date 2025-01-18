import { Container, Grid, Typography, Box, Divider } from '@mui/material'
import FooterSection from './FooterSection'
import { footerSections } from './footerData'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Trackoala
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              The all-in-one platform for managing your business with ease.
            </Typography>
          </Grid>

          {footerSections.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <FooterSection {...section} />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography color="text.secondary" align="center">
          © {new Date().getFullYear()} YourSaaS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
