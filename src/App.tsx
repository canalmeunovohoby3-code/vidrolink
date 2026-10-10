import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Credibility } from './sections/Credibility'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Differentials } from './sections/Differentials'
import { Testimonials } from './sections/Testimonials'
import { Gallery } from './sections/Gallery'
import { Location } from './sections/Location'
import { Quote } from './sections/Quote'
import { Footer } from './sections/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { GlassParticles } from './components/GlassParticles'

export function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <GlassParticles />
      <Navbar />

      <main id="conteudo">
        <Hero />
        <Credibility />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <Gallery />
        <Location />
        <Quote />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
