import { useEffect, useState, type CSSProperties } from 'react'
import './Media.css'

type MediaStatus = 'image' | 'placeholder'

type MediaProps = {
  src?: string
  alt: string
  ratio?: string
  placeholder?: string
  priority?: boolean
  zoom?: boolean
  natural?: boolean
  rounded?: boolean
  className?: string
  style?: CSSProperties
  onResolved?: (status: MediaStatus) => void
}

export function Media({
  src,
  alt,
  ratio,
  placeholder = 'Adicione a imagem',
  priority = false,
  zoom = false,
  natural = false,
  rounded = true,
  className = '',
  style,
  onResolved,
}: MediaProps) {
  const [state, setState] = useState<'idle' | 'loaded' | 'error'>('idle')
  const showImage = Boolean(src) && state !== 'error'
  const isLoaded = state === 'loaded'

  useEffect(() => {
    if (!onResolved) return
    if (!src || state === 'error') {
      onResolved('placeholder')
    } else if (state === 'loaded') {
      onResolved('image')
    }
  }, [src, state, onResolved])

  return (
    <div
      className={[
        'media',
        natural ? 'media--natural' : '',
        natural && isLoaded ? 'media--loaded' : '',
        zoom ? 'media--zoom' : '',
        rounded ? '' : 'media--square',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ...(ratio ? { ['--media-ratio' as string]: ratio } : {}), ...style }}
    >
      {showImage ? (
        <img
          className="media__img"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
        />
      ) : (
        <div className="media__ph">
          <span className="media__ph-tag">
            <i />
            {placeholder}
          </span>
        </div>
      )}
    </div>
  )
}
