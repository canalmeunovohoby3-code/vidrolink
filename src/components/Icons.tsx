import type { ReactNode, SVGProps } from 'react'
import type { DifferentialIconName, ServiceIconName } from '../types'

type IconProps = SVGProps<SVGSVGElement>

function Stroke({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  )
}

export function IconClose(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Stroke>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  )
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 17L17 7M9 7h8v8" />
    </Stroke>
  )
}

export function IconChevronLeft(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M15 6l-6 6 6 6" />
    </Stroke>
  )
}

export function IconChevronRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M9 6l6 6-6 6" />
    </Stroke>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </Stroke>
  )
}

export function IconPin(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </Stroke>
  )
}

export function IconMail(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Stroke>
  )
}

export function IconClock(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Stroke>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 12.5l4 4 10-10" />
    </Stroke>
  )
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.6l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.7 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9L12 2.6z" />
    </svg>
  )
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35M12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" />
    </svg>
  )
}

export function IconSpinner(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3a9 9 0 109 9" />
    </Stroke>
  )
}

function ServiceGlyph({ name }: { name: ServiceIconName }) {
  switch (name) {
    case 'box':
      return (
        <>
          <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
          <path d="M4 8h16" />
          <circle cx="15.5" cy="5.8" r="0.9" />
        </>
      )
    case 'espelho':
      return (
        <>
          <rect x="4.5" y="3" width="15" height="18" rx="2" />
          <path d="M8 18L16 6" />
        </>
      )
    case 'temperado':
      return (
        <>
          <path d="M12 3l7 3v5.5c0 4.2-2.9 7.5-7 9-4.1-1.5-7-4.8-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </>
      )
    case 'guarda-corpo':
      return (
        <>
          <path d="M4 20V9M20 20V9M4 9h16" />
          <path d="M8 20v-8M12 20v-8M16 20v-8" />
          <path d="M4 5h16" />
        </>
      )
    case 'portas-janelas':
      return (
        <>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <path d="M12 3v18M4 12h16" />
          <circle cx="9.5" cy="12" r="0.7" />
        </>
      )
    case 'fechamento':
      return (
        <>
          <path d="M3 20h18" />
          <path d="M5 20V8l7-4 7 4v12" />
          <path d="M5 12h14M9 20v-4h6v4" />
        </>
      )
    default:
      return null
  }
}

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & IconProps) {
  return (
    <Stroke {...props}>
      <ServiceGlyph name={name} />
    </Stroke>
  )
}

export function IconDiamond(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3l7 6-7 12-7-12 7-6z" />
      <path d="M5 9h14M9.5 9L12 21M14.5 9L12 21" />
    </Stroke>
  )
}

export function IconChat(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M20 12a7 7 0 01-7 7H8l-4 3v-4.5A7 7 0 0111 5h2a7 7 0 017 7z" />
      <path d="M9 11h6M9 14h4" />
    </Stroke>
  )
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3l7 3v5c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </Stroke>
  )
}

export function DifferentialIcon({ name, ...props }: { name: DifferentialIconName } & IconProps) {
  switch (name) {
    case 'qualidade':
      return <IconDiamond {...props} />
    case 'atendimento':
      return <IconChat {...props} />
    case 'prazo':
      return <IconClock {...props} />
    case 'instalacao':
      return <IconShieldCheck {...props} />
    default:
      return null
  }
}

export function RatingStars({ value, className = '' }: { value: number; className?: string }) {
  return (
    <span className={`stars ${className}`.trim()} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => {
        const fill = Math.max(0, Math.min(1, value - index)) * 100
        return (
          <span className="stars__item" key={index}>
            <IconStar className="stars__star stars__star--empty" />
            {fill > 0 ? (
              <span className="stars__item-fill" style={{ width: `${fill}%` }}>
                <IconStar className="stars__star" />
              </span>
            ) : null}
          </span>
        )
      })}
    </span>
  )
}
