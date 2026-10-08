import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { IconArrowRight, IconCheck, IconPin, IconWhatsApp, RatingStars } from '../components/Icons'
import { hero, site, whatsappLink } from '../data/site'
import './Hero.css'

export function Hero() {
  const [hasImage, setHasImage] = useState(true)

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__bg-fallback" />
        {hasImage ? (
          <img
            className="hero__bg-img"
            src={hero.image.src}
            alt=""
            onError={() => setHasImage(false)}
          />
        ) : null}
        <span className="hero__bg-overlay" />
      </div>

      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__glass hero__glass--1" aria-hidden="true" />
      <div className="hero__glass hero__glass--2" aria-hidden="true" />
      <div className="hero__glass hero__glass--3" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal>
            <span className="pill">
              <IconPin />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="hero__title">
              {hero.titleLead} <span className="accent">{hero.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero__sub">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={230} className="hero__actions">
            <a
              className="btn btn--primary"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              {hero.primaryCta}
              <IconArrowRight />
            </a>
            <a className="btn btn--ghost" href="#servicos">
              {hero.secondaryCta}
              <IconArrowRight />
            </a>
          </Reveal>

          <Reveal delay={300} className="hero__trust">
            <span className="hero__rating">
              <RatingStars value={site.ratingValue} />
              <strong>{site.rating}</strong>
              <span className="hero__rating-label">{site.ratingLabel}</span>
            </span>
            <span className="check-item">
              <IconCheck />
              {hero.trust}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
