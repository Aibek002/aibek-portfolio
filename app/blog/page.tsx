import Link from 'next/link'
import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Starfield } from '@/components/starfield'
import { SpaceShell } from '@/components/site-nav'

const posts = [
  { tag: 'Разработка', title: 'Как запустить веб-сервис с нуля и не потерять фокус', excerpt: 'Практический разбор пути от идеи и первых экранов до стабильного продукта.', date: '12 сентября 2026', read: '6 мин' },
  { tag: 'Бизнес', title: 'Автоматизация, которая действительно экономит время', excerpt: 'Где бизнесу помогают интеграции, Telegram-боты и понятные цифровые процессы.', date: '28 августа 2026', read: '4 мин' },
  { tag: 'Node.js', title: 'Почему быстрый бэкенд начинается с архитектуры', excerpt: 'О базовых решениях, которые делают проект готовым к росту.', date: '07 августа 2026', read: '8 мин' },
]

export default function BlogPage() {
  return (
    <SpaceShell>
      <Starfield />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-yellow-300 uppercase">Блог Айбека</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">Идеи, опыт и заметки о веб-разработке.</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/55">Простым языком о сайтах, автоматизации и цифровых продуктах, которые помогают бизнесу расти.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group flex min-h-72 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/[0.07]">
              <div className="flex items-center justify-between text-xs text-white/40"><span className="text-yellow-200">{post.tag}</span><span>{post.date}</span></div>
              <h2 className="mt-10 font-display text-2xl font-semibold leading-tight text-white">{post.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/50">{post.excerpt}</p>
              <div className="mt-auto flex items-center gap-2 pt-8 text-xs text-white/40"><Clock3 className="size-4" aria-hidden="true" /> {post.read}<ArrowUpRight className="ml-auto size-4 text-yellow-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div>
            </article>
          ))}
        </div>
        <Link href="/" className="mt-10 inline-flex text-sm text-white/55 transition-colors hover:text-white">← Вернуться на главную</Link>
      </section>
    </SpaceShell>
  )
}
