import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Starfield } from '@/components/starfield'
import { SolarSystem } from '@/components/solar-system'

export default function Page() {
  return (
    <main
      className="relative min-h-svh overflow-hidden"
      style={{ backgroundColor: '#020205' }}
    >
      <Starfield />

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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" aria-hidden="true" />
            Backend &amp; AI Engineer
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

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <Button
              size="lg"
              className="group w-full bg-yellow-400 text-black hover:bg-yellow-300 sm:w-auto"
            >
              Мои работы
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Обсудить проект
            </Button>
          </div>
        </div>

        {/* Solar system animation */}
        <div className="order-1 w-full lg:order-2 lg:flex-1">
          <SolarSystem />
        </div>
      </section>
    </main>
  )
}
