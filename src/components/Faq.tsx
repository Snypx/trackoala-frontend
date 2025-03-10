import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqs = [
  {
    question: 'How does the free trial work?',
    answer:
      'Start your 14-day free trial with full access to all features. No credit card required. Cancel anytime before the trial ends and you wont be charged.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. When you upgrade, youll be charged the prorated amount for the remainder of your billing cycle. When you downgrade, the changes will take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'We take security seriously. Your data is encrypted both in transit and at rest. We use industry-standard security measures and regularly undergo security audits to ensure your information is protected.',
  },
  {
    question: 'Do you offer customer support?',
    answer:
      'Yes, we offer customer support via email for all plans, and priority support with dedicated account managers for Professional and Business plans.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes, you can cancel your subscription at any time. Youll continue to have access to your account until the end of your current billing period.',
  },
]

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: 'grey.50',
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
          FAQs
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          Find answers to common questions about our platform
        </Typography>
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                boxShadow: 'none',
                '&:before': { display: 'none' },
                borderRadius: '8px !important',
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Faq
