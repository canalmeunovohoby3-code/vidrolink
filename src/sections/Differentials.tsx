import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { DifferentialIcon } from '../components/Icons'
import { differentials, differentialsHead } from '../data/differentials'
import './Differentials.css'

export function Differentials() {
  return (
    <RevealedSection id="diferenciais" className="section section--deep differentials">
      <div className="container">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">{differentialsHead.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">{differentialsHead.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub">{differentialsHead.description}</p>
          </Reveal>
        </div>

        <div className="differentials__grid">
          {differentials.map((item, index) => (
            <Reveal key={item.index} delay={index * 80} className="differentials__cell">
              <article className="differential card">
                <span className="differential__icon">
                  <DifferentialIcon name={item.icon} />
                </span>
                <h3 className="differential__title">{item.title}</h3>
                <p className="differential__text">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealedSection>
  )
}
