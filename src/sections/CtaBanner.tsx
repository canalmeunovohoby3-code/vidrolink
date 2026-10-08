import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { IconArrowRight, IconWhatsApp } from '../components/Icons'
import { ctaBanner, site, whatsappLink } from '../data/site'
import './CtaBanner.css'

export function CtaBanner() {
  return (
    <RevealedSection id="contato" className="section cta">
      <div className="container">
        <Reveal className="cta__card reveal--zoom">
          <span className="cta__glow" aria-hidden="true" />
          <h2 className="cta__title">{ctaBanner.title}</h2>
          <p className="cta__desc">{ctaBanner.description}</p>
          <a
            className="btn btn--primary cta__btn"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            {ctaBanner.cta}
            <IconArrowRight />
          </a>
          <span className="cta__note">
            {ctaBanner.note} · {site.phoneDisplay}
          </span>
        </Reveal>
      </div>
    </RevealedSection>
  )
}
