import Link from 'next/link'
import { ArrowUpRight, Orbit } from 'lucide-react'

const links = [
  { href: '/', label: 'Главная' },
  { href: '/blog', label: 'Блог' },
  { href: '/projects', label: 'Проекты' },
]

export function SiteNav() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="group flex items-center gap-3" aria-label="Айбек Сейтжан — главная">
        <span className="flex size-9 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10 text-yellow-200 transition-transform duration-300 group-hover:rotate-45">
          <Orbit aria-hidden="true" className="size-5" />
        </span>
        <span className="font-display text-sm font-semibold tracking-wide text-white">
          asweb<span className="text-yellow-300">.tech</span>
        </span>
      </Link>
      <nav aria-label="Основная навигация" className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-2 text-xs text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/projects" className="hidden items-center gap-1 text-sm text-white/55 transition-colors hover:text-yellow-200 sm:flex">
        Начать проект <ArrowUpRight aria-hidden="true" className="size-4" />
      </Link>
    </header>
  )
}

export function SpaceShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#020205] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_10%,rgba(37,99,235,0.12),transparent_60%),radial-gradient(800px_500px_at_10%_90%,rgba(147,51,234,0.1),transparent_60%)]" />
      <SiteNav />
      <div className="relative z-10">{children}</div>
    </main>
  )
}

export const pageTransition = 'transition-all duration-500 ease-out'
