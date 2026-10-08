import { useCallback, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { RevealedSection } from '../components/RevealedSection'
import { Lightbox } from '../components/Lightbox'
import { Media } from '../components/Media'
import { IconArrowUpRight } from '../components/Icons'
import { gallery, galleryHead } from '../data/gallery'
import './Gallery.css'

export function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState<Record<string, boolean>>({})

  const openAt = (position: number) => {
    setIndex(position)
    setOpen(true)
  }

  const markLoaded = useCallback((id: string, status: 'image' | 'placeholder') => {
    setLoaded((current) => {
      const next = status === 'image'
      if (current[id] === next) return current
      return { ...current, [id]: next }
    })
  }, [])

  return (
    <RevealedSection id="galeria" className="section section--deep gallery-section">
      <div className="container">
        <div className="sec-head">
          <Reveal>
            <span className="eyebrow">{galleryHead.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">{galleryHead.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="sec-sub">{galleryHead.description}</p>
          </Reveal>
        </div>

        <div className="gallery">
          {gallery.map((item, position) => (
            <Reveal key={item.id} delay={(position % 3) * 80} className="gallery__item">
              <button
                type="button"
                className="gallery__card"
                onClick={() => openAt(position)}
                aria-label={`Ampliar ${item.title}`}
              >
                <span className="gallery__media">
                  <Media
                    src={item.image.src}
                    alt={item.image.alt}
                    ratio="4 / 5"
                    zoom
                    placeholder={item.image.placeholder}
                    onResolved={(status) => markLoaded(item.id, status)}
                  />
                  {loaded[item.id] ? (
                    <span className="gallery__overlay" aria-hidden="true">
                      <span className="gallery__zoom">
                        <IconArrowUpRight />
                      </span>
                    </span>
                  ) : null}
                </span>
                <span className="gallery__caption">{item.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        items={gallery}
        index={index}
        onClose={() => setOpen(false)}
        onNavigate={setIndex}
      />
    </RevealedSection>
  )
}
