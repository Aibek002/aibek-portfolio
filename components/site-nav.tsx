'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, Orbit, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Главная' },
  { href: '/blog', label: 'Блог' },
  { href: '/projects', label: 'Проекты' },
  { href: '/resume', label: 'Резюме' },
]

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6">
      <Link href="/" className="group flex items-center gap-3" aria-label="Айбек Сейтжан — главная" onClick={() => setIsOpen(false)}>
        <span className="flex size-9 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10 text-yellow-200 transition-transform duration-300 group-hover:rotate-45">
          <Orbit aria-hidden="true" className="size-5" />
        </span>
        <span className="font-display text-sm font-semibold tracking-wide text-white">
          asweb<span className="text-yellow-300">.tech</span>
        </span>
      </Link>

      <nav aria-label="Основная навигация" className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md md:flex">
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

      <Link href="/projects" className="hidden items-center gap-1 text-sm text-white/55 transition-colors hover:text-yellow-200 md:flex">
        Начать проект <ArrowUpRight aria-hidden="true" className="size-4" />
      </Link>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        id="mobile-navigation"
        aria-label="Мобильная навигация"
        className={`absolute left-4 right-4 top-[calc(100%-0.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#080912]/95 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
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
