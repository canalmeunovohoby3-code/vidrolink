import { Logo } from '../components/Logo'
import {
  IconArrowUpRight,
  IconClock,
  IconMail,
  IconPin,
  IconWhatsApp,
  RatingStars,
} from '../components/Icons'
import { services } from '../data/services'
import { coverage, mapsLink, site, whatsappLink } from '../data/site'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={62} />
          <p className="footer__desc">
            Vidraçaria especializada em vidros sob medida e instalações residenciais e comerciais em
            Resende, RJ.
          </p>
          <a
            className="btn btn--primary btn--sm footer__cta"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            Falar pelo WhatsApp
          </a>
        </div>

        <nav className="footer__col" aria-label="Serviços">
          <h3 className="footer__title">Serviços</h3>
          <ul className="footer__list">
            {services.map((service) => (
              <li key={service.id}>
                <a className="footer__link" href="#servicos">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__title">Contato</h3>
          <ul className="footer__list footer__list--info">
            <li>
              <IconWhatsApp />
              <a className="footer__link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <IconMail />
              <a className="footer__link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <IconPin />
              <a className="footer__link" href={mapsLink} target="_blank" rel="noopener noreferrer">
                {site.address}
              </a>
            </li>
            <li>
              <IconClock />
              <span>{site.hours}</span>
            </li>
          </ul>
          <div className="footer__rating">
            <RatingStars value={site.ratingValue} />
            <span>
              <strong>{site.rating}</strong> · {site.ratingLabel}
            </span>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Área de atuação</h3>
          <p className="footer__coverage">{coverage.cities.join(' · ')} e toda a região.</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.name} — Vidraçaria em Resende, RJ.
        </span>
        <a className="footer__top" href="#inicio">
          Voltar ao topo
          <IconArrowUpRight />
        </a>
      </div>
    </footer>
  )
}
