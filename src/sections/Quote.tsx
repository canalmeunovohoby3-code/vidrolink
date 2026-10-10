import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { IconArrowRight, IconClock, IconMail, IconWhatsApp } from '../components/Icons'
import { services } from '../data/services'
import { quote, site, whatsappLink } from '../data/site'
import './Quote.css'

export function Quote() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [service, setService] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const serviceText = service && service !== quote.otherOption ? ` de ${service}` : ''
    const message = `Olá! Meu nome é ${name}. Meu contato: ${contact}. Gostaria de um orçamento${serviceText}.`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <RevealedSection id="contato" className="section section--deep quote">
      <div className="container quote__inner">
        <div className="quote__intro">
          <Reveal>
            <span className="eyebrow">{quote.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title quote__title">{quote.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub">{quote.description}</p>
          </Reveal>

          <Reveal delay={200} className="quote__direct">
            <span className="quote__direct-label">{quote.directLabel}</span>
            <div className="quote__contacts">
              <a
                className="quote__contact"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                {site.phoneDisplay}
              </a>
              <a className="quote__contact" href={`mailto:${site.email}`}>
                <IconMail />
                {site.email}
              </a>
              <span className="quote__contact">
                <IconClock />
                {site.hours}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="quote__card card">
          <form className="quote__form" onSubmit={handleSubmit} noValidate={false}>
            <label className="quote__field">
              <span className="quote__label">{quote.nameLabel}</span>
              <input
                className="quote__input"
                type="text"
                name="nome"
                autoComplete="name"
                placeholder="Seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

            <label className="quote__field">
              <span className="quote__label">{quote.contactLabel}</span>
              <input
                className="quote__input"
                type="text"
                name="contato"
                autoComplete="tel"
                placeholder="Telefone, WhatsApp ou e-mail"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                required
              />
            </label>

            <label className="quote__field">
              <span className="quote__label">{quote.serviceLabel}</span>
              <select
                className="quote__input quote__select"
                name="servico"
                value={service}
                onChange={(event) => setService(event.target.value)}
                required
              >
                <option value="" disabled>
                  {quote.servicePlaceholder}
                </option>
                {services.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
                <option value={quote.otherOption}>{quote.otherOption}</option>
              </select>
            </label>

            <button type="submit" className="btn btn--primary quote__submit">
              <IconWhatsApp />
              {quote.submitLabel}
              <IconArrowRight />
            </button>
          </form>
        </Reveal>
      </div>
    </RevealedSection>
  )
}
