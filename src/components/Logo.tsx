import { useState, type CSSProperties } from 'react'
import { site } from '../data/site'
import './Logo.css'

type LogoProps = {
  size?: number
  className?: string
  style?: CSSProperties
}

export function Logo({ size = 40, className = '', style }: LogoProps) {
  const [index, setIndex] = useState(0)
  const candidates = site.logoCandidates
  const failed = index >= candidates.length

  return (
    <span
      className={`logo ${className}`.trim()}
      style={{ ...style, ['--logo-h' as string]: `${size}px` }}
    >
      {!failed ? (
        <img
          className="logo__mark"
          src={candidates[index]}
          alt={`${site.name} — logotipo`}
          width={site.logoWidth}
          height={site.logoHeight}
          decoding="async"
          onError={() => setIndex((value) => value + 1)}
        />
      ) : (
        <span
          className="logo__ph"
          title="Adicione o logo oficial em public/images/logo"
        >
          <span className="logo__ph-tag">Logo oficial aqui</span>
          <span className="logo__ph-name">{site.wordmark}</span>
        </span>
      )}
    </span>
  )
}
