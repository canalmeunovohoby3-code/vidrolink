import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IconChevronLeft, IconChevronRight, IconClose } from './Icons'
import { Media } from './Media'
import { useBodyLock } from '../hooks/useUi'
import type { GalleryItem } from '../types'
import './Lightbox.css'

type LightboxProps = {
  open: boolean
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ open, items, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useBodyLock(open)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight') {
        onNavigate((index + 1) % items.length)
      } else if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + items.length) % items.length)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previous?.focus?.()
    }
  }, [open, index, items.length, onClose, onNavigate])

  if (!open || items.length === 0) return null

  const current = items[index]

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${current.index} — ${index + 1} de ${items.length}`}
    >
      <button
        type="button"
        className="lightbox__backdrop"
        aria-label="Fechar"
        onClick={onClose}
        tabIndex={-1}
      />

      <div className="lightbox__panel">
        <div className="lightbox__bar">
          <span className="lightbox__label">{current.index}</span>
          <div className="lightbox__tools">
            <span className="lightbox__count">
              {index + 1} / {items.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              className="lightbox__icon"
              onClick={onClose}
              aria-label="Fechar"
            >
              <IconClose />
            </button>
          </div>
        </div>

        <div className="lightbox__body">
          {items.length > 1 ? (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => onNavigate((index - 1 + items.length) % items.length)}
              aria-label="Imagem anterior"
            >
              <IconChevronLeft />
            </button>
          ) : null}

          <div className="lightbox__media">
            <Media
              src={current.image.src}
              alt={current.image.alt}
              ratio={current.ratio}
              natural
              placeholder={current.image.placeholder}
              rounded={false}
            />
          </div>

          {items.length > 1 ? (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => onNavigate((index + 1) % items.length)}
              aria-label="Próxima imagem"
            >
              <IconChevronRight />
            </button>
          ) : null}
        </div>

        <p className="lightbox__caption">{current.title}</p>
      </div>
    </div>,
    document.body,
  )
}
