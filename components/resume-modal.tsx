'use client'

import { BriefcaseBusiness, Code2, GraduationCap, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ResumeModal() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            size="lg"
            variant="outline"
            className="h-11 w-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white md:w-auto"
          />
        }
      >
        Посмотреть резюме
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="max-h-[90svh] overflow-y-auto border-white/10 bg-[#080a14]/95 text-white shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:max-w-2xl">
        <DialogHeader className="pr-8">
          <DialogTitle className="font-display text-2xl text-white sm:text-3xl">
            Айбек Сейтжан
          </DialogTitle>
          <DialogDescription className="text-base text-white/60">
            Full Stack Developer · Remote Web Programmer · IT Mentor
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 pt-2">
          <section className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/10 text-yellow-200">
              <BriefcaseBusiness aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Опыт работы</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Разработка веб-платформ с нуля, написание REST API, оптимизация баз данных и интеграции. Коммерческая разработка для Buketov University, GaMa Group и «Ваш Домофон». Менторство и обучение программированию.
              </p>
            </div>
          </section>

          <section className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-blue-300/20 bg-blue-300/10 text-blue-200">
              <Code2 aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Стек технологий</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['PHP', 'Laravel', 'Node.js', 'JavaScript', 'Vue', 'MySQL'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-purple-300/20 bg-purple-300/10 text-purple-200">
              <GraduationCap aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Чем могу помочь</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Помогу превратить идею в понятный, быстрый и удобный цифровой продукт — от первой концепции до запуска.
              </p>
            </div>
          </section>
        </div>

        <DialogClose
          render={
            <Button
              variant="ghost"
              className="absolute right-4 top-4 text-white/60 hover:bg-white/10 hover:text-white"
              aria-label="Закрыть резюме"
            />
          }
        >
          <X aria-hidden="true" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
