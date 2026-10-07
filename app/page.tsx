import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Fleet from '@/components/Fleet'
import HowItWorks from '@/components/HowItWorks'
import ServiceArea from '@/components/ServiceArea'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Fleet />
      <HowItWorks />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
