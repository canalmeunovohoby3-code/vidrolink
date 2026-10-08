import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { RatingStars } from '../components/Icons'
import { site } from '../data/site'
import { testimonials, testimonialsHead } from '../data/testimonials'
import './Testimonials.css'

export function Testimonials() {
  return (
    <RevealedSection theme="light" className="section section--soft testimonials">
      <div className="container">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">{testimonialsHead.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">{testimonialsHead.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub">{testimonialsHead.description}</p>
          </Reveal>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 90} className="testimonials__cell">
              <figure className="testimonial card">
                <RatingStars value={5} />
                <blockquote className="testimonial__quote">{testimonial.quote}</blockquote>
                <figcaption className="testimonial__author">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {testimonial.initials}
                  </span>
                  <span className="testimonial__meta">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.source}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="testimonials__note">
          <RatingStars value={site.ratingValue} />
          <span>
            Nota <strong>{site.rating}</strong> em {site.ratingLabel.toLowerCase()}.
          </span>
        </Reveal>
      </div>
    </RevealedSection>
  )
}
