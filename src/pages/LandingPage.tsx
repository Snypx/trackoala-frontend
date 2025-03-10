import Challenges from '../components/Challenges'
import HeroSection from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Solutions from '../components/Solutions'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Challenges />
      <Solutions />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default LandingPage
