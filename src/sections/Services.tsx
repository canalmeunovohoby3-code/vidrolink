import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { IconArrowRight, IconCheck, IconWhatsApp, ServiceIcon } from '../components/Icons'
import { services, servicesHead } from '../data/services'
import { whatsappLink } from '../data/site'
import './Services.css'

export function Services() {
  return (
    <RevealedSection id="servicos" theme="light" className="section section--soft services">
      <div className="container">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">{servicesHead.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">{servicesHead.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub">{servicesHead.description}</p>
          </Reveal>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 80} className="services__cell">
              <article className="service-card card">
                <div className="service-card__head">
                  <span className="service-card__icon">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3 className="service-card__title">{service.title}</h3>
                </div>
                <p className="service-card__text">{service.description}</p>
                <a
                  className="link-arrow service-card__link"
                  href={whatsappLink(`Olá! Gostaria de um orçamento de ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir orçamento
                  <IconArrowRight />
                </a>
              </article>
            </Reveal>
          ))}

          <Reveal delay={120} className="services__cell services__cell--wide">
            <article className="service-card service-card--cta card">
              <div className="service-card__cta-main">
                <div className="service-card__head">
                  <span className="service-card__icon">
                    <IconCheck />
                  </span>
                  <h3 className="service-card__title">Medição e instalação inclusas</h3>
                </div>
                <p className="service-card__text">
                  Vamos até o local, tiramos as medidas e instalamos com agilidade — sem
                  complicações para você.
                </p>
              </div>
              <a
                className="btn btn--primary service-card__btn"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                Falar com a Vidrolink
                <IconArrowRight />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </RevealedSection>
  )
}
