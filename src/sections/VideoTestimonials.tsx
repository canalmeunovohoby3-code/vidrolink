import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { videoTestimonials, videoTestimonialsHead } from '../data/testimonials'
import './VideoTestimonials.css'

export function VideoTestimonials() {
  return (
    <RevealedSection id="videos" theme="light" className="section section--soft videos">
      <div className="container">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">{videoTestimonialsHead.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">{videoTestimonialsHead.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub">{videoTestimonialsHead.description}</p>
          </Reveal>
        </div>

        <div className="videos__grid">
          {videoTestimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 90} className="videos__cell">
              <article className="video-card card">
                <div className="video-card__media">
                  <video
                    className="video-card__player"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    src={item.src}
                  />
                </div>
                <span className="video-card__title">{item.title}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealedSection>
  )
}
