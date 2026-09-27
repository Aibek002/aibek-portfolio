import type { CSSProperties, ReactNode } from 'react'

type OrbitProps = {
  /** Diameter as a percentage of the container (e.g. "48%"). */
  size: string
  /** Seconds for one full revolution. */
  duration: number
  reverse?: boolean
  children: ReactNode
}

function Orbit({ size, duration, reverse, children }: OrbitProps) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
      style={{ width: size, height: size }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          animation: `spin ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
        }}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </div>
  )
}

type PlanetProps = {
  className?: string
  style?: CSSProperties
  label: string
  children?: ReactNode
}

function Planet({ className, style, label, children }: PlanetProps) {
  return (
    <div className={`relative rounded-full ${className ?? ''}`} style={style} title={label}>
      <span className="sr-only">{label}</span>
      {children}
    </div>
  )
}

export function SolarSystem() {
  return (
    <div
      aria-label="Анимация Солнечной системы"
      role="img"
      className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[540px]"
    >
      {/* Ambient glow behind the system */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.18), transparent 70%)' }}
      />

      {/* Sun */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-12 w-12 rounded-full sm:h-16 sm:w-16"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #fff7cc, #facc15 45%, #f59e0b 100%)',
            boxShadow:
              '0 0 24px 6px rgba(250,204,21,0.55), 0 0 70px 18px rgba(245,158,11,0.35)',
          }}
        />
      </div>

      {/* Mercury */}
      <Orbit size="34%" duration={9}>
        <Planet
          label="Меркурий"
          className="h-2 w-2 sm:h-2.5 sm:w-2.5"
          style={{ background: 'radial-gradient(circle at 35% 30%, #d6d3d1, #78716c)' }}
        />
      </Orbit>

      {/* Venus */}
      <Orbit size="52%" duration={15}>
        <Planet
          label="Венера"
          className="h-3 w-3 sm:h-4 sm:w-4"
          style={{ background: 'radial-gradient(circle at 35% 30%, #fde68a, #d97706)' }}
        />
      </Orbit>

      {/* Earth + Moon */}
      <Orbit size="72%" duration={22}>
        <Planet
          label="Земля"
          className="h-3.5 w-3.5 sm:h-5 sm:w-5"
          style={{
            background: 'radial-gradient(circle at 32% 28%, #7dd3fc, #2563eb 55%, #1e3a8a)',
            boxShadow: '0 0 10px 1px rgba(59,130,246,0.5)',
          }}
        >
          {/* Moon orbiting Earth */}
          <div className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 rounded-full">
            <div
              className="h-full w-full rounded-full"
              style={{ animation: 'spin 4s linear infinite' }}
            >
              <Planet
                label="Луна"
                className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2"
                style={{ background: 'radial-gradient(circle at 35% 30%, #f5f5f4, #a8a29e)' }}
              />
            </div>
          </div>
        </Planet>
      </Orbit>

      {/* Mars */}
      <Orbit size="92%" duration={30}>
        <Planet
          label="Марс"
          className="h-3 w-3 sm:h-4 sm:w-4"
          style={{ background: 'radial-gradient(circle at 35% 30%, #fca5a5, #dc2626 60%, #991b1b)' }}
        />
      </Orbit>
    </div>
  )
}
