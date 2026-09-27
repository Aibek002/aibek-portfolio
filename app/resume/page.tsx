import Link from 'next/link'
import { ArrowLeft, BriefcaseBusiness, ExternalLink, GraduationCap, MapPin, Mail, Phone, Send } from 'lucide-react'
import { SpaceShell, pageTransition } from '@/components/site-nav'

const socialLinks = [
  { label: 'Telegram', handle: '@aswebtech', href: 'https://t.me/aswebtech', icon: Send },
  { label: 'LinkedIn', handle: '@Aibek_Seitzhan', href: 'https://linkedin.com/in/Aibek_Seitzhan', icon: BriefcaseBusiness },
  { label: 'TikTok', handle: '@asweb.tech', href: 'https://tiktok.com/@asweb.tech', icon: ExternalLink },
  { label: 'Instagram', handle: '@asweb.tech', href: 'https://instagram.com/asweb.tech', icon: ExternalLink },
]

const skills = ['PHP', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Yii2', 'Laravel', 'Express.js', 'Bootstrap', 'MVC', 'MySQL', 'Docker', 'Git', 'Linux', 'Nginx', 'VS Code']

export default function ResumePage() {
  return (
    <SpaceShell>
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:pt-14">
        <Link href="/" className={`inline-flex items-center gap-2 text-sm text-white/55 hover:text-yellow-200 ${pageTransition}`}>
          <ArrowLeft className="size-4" aria-hidden="true" /> Вернуться на главную
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8 lg:flex lg:items-end lg:justify-between lg:gap-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-200/80">Резюме</p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">Айбек Сейтжан</h1>
            <p className="mt-3 text-xl text-white/60">Aibek Seitzhan · Full-Stack разработчик</p>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-sm text-white/55 lg:mt-0 lg:text-right">
            <span className="inline-flex items-center gap-2 lg:justify-end"><MapPin className="size-4 text-yellow-200" /> Алматы, Казахстан</span>
            <a href="tel:+77075924653" className="inline-flex items-center gap-2 hover:text-white lg:justify-end"><Phone className="size-4 text-yellow-200" /> +7 (707) 592-46-53</a>
            <a href="mailto:aibekseitzhan002@gmail.com" className="inline-flex items-center gap-2 hover:text-white lg:justify-end"><Mail className="size-4 text-yellow-200" /> aibekseitzhan002@gmail.com</a>
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="flex flex-col gap-6">
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-200/80">Профиль</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/65">Разработчик с опытом более 2 лет. Основное направление — разработка и доработка веб-приложений на PHP (Yii2, Laravel). Имею опыт работы с JavaScript, MySQL, REST API, Docker и Linux.</p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-3"><BriefcaseBusiness className="size-5 text-yellow-200" /><h2 className="font-display text-2xl font-semibold text-white">Опыт работы</h2></div>
              <div className="mt-6 flex flex-col gap-8">
                <article className="border-l border-yellow-200/30 pl-5"><p className="text-sm text-yellow-200">июнь 2024 — апрель 2026</p><h3 className="mt-1 text-lg font-semibold text-white">Full-Stack разработчик</h3><p className="text-white/55">Карагандинский университет имени академика Е.А. Букетова</p><p className="mt-3 leading-7 text-white/60">Разработка с нуля на PHP (Yii2), рефакторинг legacy-кода, разработка REST API, бесшовная интеграция внешних сервисов.</p></article>
                <article className="border-l border-blue-300/30 pl-5"><p className="text-sm text-blue-200">май 2026 — по настоящее время</p><h3 className="mt-1 text-lg font-semibold text-white">Инженер-программист</h3><p className="text-white/55">Общеобразовательная школа № 213</p><p className="mt-3 leading-7 text-white/60">Ремонт и обслуживание оргтехники, обеспечение работы интернета, обслуживание камер видеонаблюдения.</p></article>
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-6">
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"><div className="flex items-center gap-3"><GraduationCap className="size-5 text-yellow-200" /><h2 className="font-display text-xl font-semibold text-white">Образование</h2></div><p className="mt-4 font-medium text-white">SDU University</p><p className="mt-1 text-sm leading-6 text-white/55">Бакалавр информационных систем</p><p className="mt-4 text-sm leading-6 text-white/55">Oracle, SQLite, MySQL, Cisco, Huawei, 3D-моделирование, ООП</p></section>
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"><h2 className="font-display text-xl font-semibold text-white">Навыки</h2><div className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/65">{skill}</span>)}</div></section>
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"><h2 className="font-display text-xl font-semibold text-white">Социальные сети</h2><div className="mt-4 flex flex-col gap-3">{socialLinks.map(({ label, handle, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-yellow-200"><Icon className="size-4" aria-hidden="true" /><span>{label}</span><span className="ml-auto text-white/35">{handle}</span></a>)}</div></section>
          </aside>
        </div>
      </div>
    </SpaceShell>
  )
}
