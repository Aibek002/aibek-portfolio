import { ArrowRight, BriefcaseBusiness, Camera, Music2, Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Starfield } from '@/components/starfield'
import { SolarSystem } from '@/components/solar-system'
import { SiteNav } from '@/components/site-nav'
import Link from 'next/link'

export default function Page() {
  return (
    <main
      className="relative min-h-svh overflow-hidden"
      style={{ backgroundColor: '#020205' }}
    >
      <Starfield />
      <SiteNav />

      {/* Soft nebula gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 80% 20%, rgba(37,99,235,0.12), transparent 60%), radial-gradient(900px 500px at 10% 90%, rgba(147,51,234,0.10), transparent 60%)',
        }}
      />

      <section className="relative mx-auto flex min-h-svh max-w-6xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:justify-between lg:gap-8 lg:py-0">
        {/* Text block */}
        <div className="order-2 max-w-xl text-center lg:order-1 lg:text-left">
          <div className="mb-6 flex flex-col items-center gap-3 lg:items-start">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
              Айбек Сейтжан
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" aria-hidden="true" />
              Full Stack Developer
            </div>
          </div>

          <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(120deg, #fde68a 0%, #60a5fa 45%, #c084fc 100%)',
              }}
            >
              Создаю современные сайты и веб-сервисы для вашего бизнеса
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-white/60 lg:mx-0 lg:text-lg">
            Разрабатываю быстрые сайты, интернет-магазины и Telegram-ботов,
            которые помогают автоматизировать работу и привлекать клиентов. Делаю
            под ключ: от идеи до запуска.
          </p>

          <div className="mt-8 flex w-full max-w-xs flex-col items-stretch justify-center gap-3 mx-auto md:max-w-none md:flex-row md:items-center md:w-auto md:gap-4">
            <Button
              asChild
              size="lg"
              className="group h-11 w-full bg-yellow-400 text-black hover:bg-yellow-300 md:w-auto"
            >
              <Link href="/projects" className="flex items-center justify-center gap-2">
                Мои работы
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 w-full border-white/15 bg-white/5 text-white hover:bg-white/10 md:w-auto">
              <Link href="/resume" className="flex items-center justify-center gap-2">
                Посмотреть резюме
              </Link>
            </Button>
          </div>
        </div>

        {/* Solar system animation */}
        <div className="order-1 w-full lg:order-2 lg:flex-1">
          <SolarSystem />
        </div>
      </section>

      <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-6 text-sm text-white/45 sm:flex-row">
        <p>Айбек Сейтжан · asweb.tech</p>
        <nav aria-label="Социальные сети" className="flex items-center gap-2">
          {[
            { label: 'Telegram', href: 'https://t.me/aswebtech', icon: Send },
            { label: 'TikTok', href: 'https://tiktok.com/@asweb.tech', icon: Music2 },
            { label: "Instagram", href: 'https://instagram.com/asweb.tech', icon: Camera },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aibek-seitzhan', icon: BriefcaseBusiness },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} — asweb.tech`}
              className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </footer>
    </main>
  )
}
