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
import MobileCallBar from '@/components/MobileCallBar'
import { faqs } from '@/lib/faqs'
import { PHONE, SITE_NAME, SITE_URL } from '@/lib/site'

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    image: `${SITE_URL}/images/escalade-street.jpg`,
    provider: { '@type': 'LocalBusiness', name: SITE_NAME, telephone: PHONE, address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' } },
    areaServed: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'JFK Airport', 'LaGuardia Airport', 'Newark Airport'].map(name => ({ '@type': 'Place', name })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
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
      <MobileCallBar />
    </main>
  )
}
