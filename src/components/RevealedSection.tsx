import { useEffect, useRef, type ReactNode } from 'react'
import './RevealedSection.css'

let sharedObserver: IntersectionObserver | null = null

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            sharedObserver?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    )
  }
  return sharedObserver
}

type RevealedSectionProps = {
  children: ReactNode
  id?: string
  className?: string
  theme?: 'light'
}

export function RevealedSection({ children, id, className = '', theme }: RevealedSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = getObserver()
    if (!observer) {
      node.classList.add('is-visible')
      return
    }
    observer.observe(node)
    return () => observer.unobserve(node)
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      data-theme={theme}
      className={`section-reveal ${className}`.trim()}
    >
      {children}
    </section>
  )
}
