import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { about } from '../data/site'
import './About.css'

export function About() {
  return (
    <RevealedSection id="empresa" className="section about">
      <div className="container about__inner">
        <div className="about__head">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title about__title">{about.title}</h2>
          </Reveal>
          <div className="about__paragraphs">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal as="p" key={paragraph} delay={120 + index * 70}>
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={140} className="about__aside">
          <ul className="about__highlights">
            {about.highlights.map((highlight, index) => (
              <li key={highlight.title} className="about__highlight">
                <span className="about__highlight-index">0{index + 1}</span>
                <div>
                  <h3 className="about__highlight-title">{highlight.title}</h3>
                  <p className="about__highlight-text">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </RevealedSection>
  )
}
