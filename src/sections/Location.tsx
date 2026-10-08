import { Reveal } from '../components/Reveal'
import { IconArrowRight, IconArrowUpRight, IconClock, IconPin, IconWhatsApp } from '../components/Icons'
import { coverage, location, mapsEmbed, mapsLink, site, whatsappLink } from '../data/site'
import './Location.css'

export function Location() {
  return (
    <section id="localizacao" data-theme="light" className="section section--soft location">
      <div className="container">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">{location.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">{location.title}</h2>
          </Reveal>
        </div>

        <div className="location__inner">
          <Reveal className="location__map">
            <iframe
              title="Mapa da localização da Vidrolink em Resende"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="location__map-link" href={mapsLink} target="_blank" rel="noopener noreferrer">
              {location.mapsCta}
              <IconArrowUpRight />
            </a>
          </Reveal>

          <Reveal delay={100} className="location__info card">
            <ul className="location__list">
              <li className="location__item">
                <span className="location__icon">
                  <IconPin />
                </span>
                <span className="location__item-body">
                  <span className="location__item-label">{location.addressLabel}</span>
                  <a
                    className="location__item-value location__item-link"
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.address}
                  </a>
                </span>
              </li>

              <li className="location__item">
                <span className="location__icon">
                  <IconClock />
                </span>
                <span className="location__item-body">
                  <span className="location__item-label">{location.hoursLabel}</span>
                  <span className="location__item-value">{site.hours}</span>
                </span>
              </li>

              <li className="location__item">
                <span className="location__icon">
                  <IconWhatsApp />
                </span>
                <span className="location__item-body">
                  <span className="location__item-label">{location.phoneLabel}</span>
                  <a
                    className="location__item-value location__item-link"
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.phoneDisplay}
                  </a>
                </span>
              </li>
            </ul>

            <a
              className="btn btn--primary btn--block location__cta"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              {location.whatsappCta}
              <IconArrowRight />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="location__coverage">
          <span className="eyebrow">{location.coverageLabel}</span>
          <h3 className="location__coverage-title">{coverage.title}</h3>
          <ul className="location__cities">
            {coverage.cities.map((city) => (
              <li key={city} className="chip">
                {city}
              </li>
            ))}
          </ul>
          <p className="location__closing">{coverage.closing}</p>
        </Reveal>
      </div>
    </section>
  )
}
