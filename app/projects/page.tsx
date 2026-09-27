import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Starfield } from '@/components/starfield'
import { SpaceShell } from '@/components/site-nav'

const projects = [
  { number: '01', title: 'Buketov University', type: 'Веб-платформа', description: 'Цифровая платформа для образовательного процесса: удобный доступ к материалам, сервисам и взаимодействию студентов с университетом.', stack: ['Laravel', 'Vue', 'MySQL'], result: 'Система с нуля до запуска' },
  { number: '02', title: 'GaMa Group', type: 'Корпоративный сервис', description: 'Надёжный веб-сервис для автоматизации внутренних процессов и управления рабочими задачами команды.', stack: ['Node.js', 'JavaScript', 'REST API'], result: 'Меньше ручной работы' },
  { number: '03', title: 'Ваш Домофон', type: 'Сервис для клиентов', description: 'Связанный с реальным бизнесом продукт с интеграциями, базой данных и понятным пользовательским сценарием.', stack: ['PHP', 'Laravel', 'MySQL'], result: 'Стабильная работа сервиса' },
]

export default function ProjectsPage() {
  return (
    <SpaceShell>
      <Starfield />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="mb-4 text-sm font-semibold tracking-[0.2em] text-yellow-300 uppercase">Избранные проекты</p><h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">Создаю решения, которыми удобно пользоваться.</h1></div>
          <p className="max-w-xs text-sm leading-relaxed text-white/45">От первой идеи до запущенного продукта — с вниманием к деталям и результату.</p>
        </div>
        <div className="mt-14 flex flex-col gap-5">
          {projects.map((project) => (
            <article key={project.title} className="group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:border-blue-300/30 hover:bg-white/[0.07] md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:p-8">
              <span className="font-display text-3xl text-white/20">{project.number}</span>
              <div><p className="text-xs font-medium tracking-wider text-yellow-300 uppercase">{project.type}</p><h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h2></div>
              <div><p className="text-sm leading-relaxed text-white/50">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{item}</span>)}</div></div>
              <div className="flex items-center gap-2 text-sm text-white/55 md:flex-col md:items-end"><CheckCircle2 className="size-4 text-emerald-300" aria-hidden="true" />{project.result}<ArrowUpRight className="size-4 text-yellow-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div>
            </article>
          ))}
        </div>
        <Link href="/" className="mt-10 inline-flex text-sm text-white/55 transition-colors hover:text-white">← Вернуться на главную</Link>
      </section>
    </SpaceShell>
  )
}
