import { whatsappLink } from '../data/site'
import { IconWhatsApp } from './Icons'
import './WhatsAppFloat.css'

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      <IconWhatsApp />
      <span className="wa-float__label">Fale conosco</span>
    </a>
  )
}
