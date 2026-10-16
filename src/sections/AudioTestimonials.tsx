import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { audioTestimonials, audioTestimonialsHead } from '../data/testimonials'
import './AudioTestimonials.css'

export function AudioTestimonials() {
  return (
    <RevealedSection id="audios" theme="light" className="section section--soft audios">
      <div className="container">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">{audioTestimonialsHead.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">{audioTestimonialsHead.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub">{audioTestimonialsHead.description}</p>
          </Reveal>
        </div>

        <div className="audios__grid">
          {audioTestimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 90} className="audios__cell">
              <article className="audio-card card">
                <span className="audio-card__title">{item.title}</span>
                <audio className="audio-card__player" controls preload="metadata" src={item.src}>
                  Seu navegador não suporta a reprodução de áudio.
                </audio>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealedSection>
  )
}
