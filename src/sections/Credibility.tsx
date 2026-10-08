import { Reveal } from '../components/Reveal'
import { IconCheck, RatingStars } from '../components/Icons'
import { credibility, site } from '../data/site'
import './Credibility.css'

export function Credibility() {
  return (
    <section className="credibility" data-theme="light">
      <div className="container">
        <Reveal className="credibility__card">
          <div className="credibility__score">
            <span className="credibility__value">{credibility.score}</span>
            <RatingStars value={site.ratingValue} />
            <span className="credibility__label">{credibility.label}</span>
          </div>

          <div className="credibility__body">
            <span className="credibility__title">{credibility.title}</span>
            <ul className="credibility__items">
              {credibility.items.map((item) => (
                <li key={item} className="check-item">
                  <IconCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
