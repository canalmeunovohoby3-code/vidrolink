import './GlassParticles.css'

type Particle = {
  x: string
  y: string
  size: number
  ratio?: number
  rotate: number
  tx: number
  ty: number
  scale: number
  dur: number
  delay: number
  opacity: number
  shard?: boolean
}

const PARTICLES: Particle[] = [
  { x: '6%', y: '18%', size: 14, rotate: 18, tx: 14, ty: -22, scale: 1.08, dur: 42, delay: 0, opacity: 0.3, shard: true },
  { x: '15%', y: '58%', size: 20, rotate: -22, tx: -18, ty: -30, scale: 1.06, dur: 54, delay: -8, opacity: 0.22 },
  { x: '23%', y: '32%', size: 9, rotate: 40, tx: 10, ty: 16, scale: 1.1, dur: 36, delay: -4, opacity: 0.34, shard: true },
  { x: '31%', y: '80%', size: 12, ratio: 1.5, rotate: 12, tx: -12, ty: -20, scale: 1.05, dur: 48, delay: -14, opacity: 0.24 },
  { x: '38%', y: '12%', size: 16, rotate: 58, tx: 18, ty: 24, scale: 1.07, dur: 60, delay: -20, opacity: 0.2, shard: true },
  { x: '44%', y: '50%', size: 8, rotate: -36, tx: -9, ty: 15, scale: 1.12, dur: 33, delay: -3, opacity: 0.36 },
  { x: '50%', y: '26%', size: 11, ratio: 1.4, rotate: 26, tx: 13, ty: -16, scale: 1.06, dur: 46, delay: -22, opacity: 0.26 },
  { x: '57%', y: '72%', size: 18, rotate: -14, tx: -15, ty: -24, scale: 1.06, dur: 58, delay: -6, opacity: 0.22, shard: true },
  { x: '63%', y: '16%', size: 13, rotate: 34, tx: 11, ty: 20, scale: 1.09, dur: 38, delay: -11, opacity: 0.3 },
  { x: '69%', y: '56%', size: 22, rotate: -50, tx: -20, ty: 14, scale: 1.05, dur: 64, delay: -26, opacity: 0.18, shard: true },
  { x: '75%', y: '34%', size: 9, rotate: 8, tx: 9, ty: -14, scale: 1.12, dur: 31, delay: -2, opacity: 0.34 },
  { x: '80%', y: '84%', size: 12, ratio: 1.3, rotate: 46, tx: -10, ty: -18, scale: 1.06, dur: 50, delay: -17, opacity: 0.24 },
  { x: '86%', y: '22%', size: 16, rotate: -30, tx: 16, ty: 22, scale: 1.07, dur: 62, delay: -29, opacity: 0.2, shard: true },
  { x: '91%', y: '62%', size: 10, rotate: 16, tx: -8, ty: -16, scale: 1.1, dur: 34, delay: -5, opacity: 0.32 },
  { x: '96%', y: '38%', size: 14, rotate: 52, tx: 12, ty: -20, scale: 1.06, dur: 52, delay: -24, opacity: 0.22 },
  { x: '10%', y: '88%', size: 11, rotate: 68, tx: 14, ty: -16, scale: 1.08, dur: 44, delay: -30, opacity: 0.26 },
  { x: '28%', y: '4%', size: 8, rotate: -8, tx: -7, ty: 13, scale: 1.12, dur: 30, delay: -1, opacity: 0.36 },
  { x: '34%', y: '66%', size: 15, rotate: 36, tx: 13, ty: -22, scale: 1.06, dur: 56, delay: -33, opacity: 0.2, shard: true },
  { x: '54%', y: '44%', size: 7, rotate: 20, tx: 8, ty: -12, scale: 1.14, dur: 29, delay: -7, opacity: 0.34 },
  { x: '73%', y: '8%', size: 12, rotate: -56, tx: -10, ty: 18, scale: 1.07, dur: 47, delay: -27, opacity: 0.24, shard: true },
  { x: '88%', y: '8%', size: 14, rotate: 28, tx: 15, ty: -18, scale: 1.06, dur: 45, delay: -12, opacity: 0.24 },
  { x: '2%', y: '42%', size: 10, rotate: 48, tx: 11, ty: 16, scale: 1.1, dur: 40, delay: -19, opacity: 0.28, shard: true },
]

export function GlassParticles() {
  return (
    <div className="glass-layer" aria-hidden="true">
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className={`glass-particle${particle.shard ? ' glass-particle--shard' : ''}`}
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${Math.round(particle.size * (particle.ratio ?? 1))}px`,
            ['--p-rot' as string]: `${particle.rotate}deg`,
            ['--p-tx' as string]: `${particle.tx}px`,
            ['--p-ty' as string]: `${particle.ty}px`,
            ['--p-scale' as string]: `${particle.scale}`,
            ['--p-dur' as string]: `${particle.dur}s`,
            ['--p-delay' as string]: `${particle.delay}s`,
            ['--p-o' as string]: `${particle.opacity}`,
          }}
        >
          <span className="glass-particle__shine" />
        </span>
      ))}
    </div>
  )
}
