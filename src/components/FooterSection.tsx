import { Typography, Box } from '@mui/material'

interface FooterSectionProps {
  title: string
  links: Array<{ text: string; href: string }>
}

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {links.map((link, index) => (
        <Typography
          key={index}
          component="a"
          href={link.href}
          color="text.secondary"
          sx={{
            display: 'block',
            mb: 1,
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' },
          }}
        >
          {link.text}
        </Typography>
      ))}
    </Box>
  )
}

export default FooterSection
