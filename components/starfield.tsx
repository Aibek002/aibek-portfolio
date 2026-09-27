// Deterministic star positions so server and client render identically (no hydration mismatch).
const STARS = Array.from({ length: 90 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280
  const rand = seed / 233280
  const rand2 = ((i * 4021 + 7919) % 233280) / 233280
  const rand3 = ((i * 6151 + 1741) % 233280) / 233280
  return {
    top: `${(rand * 100).toFixed(2)}%`,
    left: `${(rand2 * 100).toFixed(2)}%`,
    size: rand3 > 0.85 ? 2.5 : rand3 > 0.6 ? 1.75 : 1,
    delay: `${(rand3 * 4).toFixed(2)}s`,
    duration: `${(3 + rand2 * 4).toFixed(2)}s`,
  }
})

export function Starfield() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((star, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  )
}
