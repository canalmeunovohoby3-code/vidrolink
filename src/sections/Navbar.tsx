import { useState } from 'react'
import { Logo } from '../components/Logo'
import { IconClose, IconMenu, IconWhatsApp } from '../components/Icons'
import { whatsappLink } from '../data/site'
import { useBodyLock, useScrolled } from '../hooks/useUi'
import type { NavItem } from '../types'
import './Navbar.css'

const NAV_ITEMS: NavItem[] = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Localização', id: 'localizacao' },
  { label: 'Contato', id: 'contato' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(10)
  useBodyLock(open)

  const close = () => setOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="container nav__inner">
          <a
            href="#inicio"
            className="nav__brand"
            onClick={close}
            aria-label="Vidrolink — ir para o início"
          >
            <Logo size={58} />
          </a>

          <nav className="nav__links" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav__link" onClick={close}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a
              className="btn btn--primary btn--sm nav__cta"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              Solicitar orçamento
            </a>

            <button
              type="button"
              className="nav__toggle"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      <div id="menu-mobile" className="nav__drawer" hidden={!open}>
        <nav className="nav__drawer-links" aria-label="Navegação mobile">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav__drawer-link" onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary btn--block"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <IconWhatsApp />
          Solicitar orçamento
        </a>
      </div>
    </>
  )
}
