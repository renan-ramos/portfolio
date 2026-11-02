import { useMessages, useTranslations } from 'next-intl'
import Link from '@/components/navigation-link'

type Case = { company: string; title: string; description: string }

const Home = () => {
  const t = useTranslations('home')
  const messages = useMessages()
  const skills: string[] = messages?.home?.skills?.list
  const cases: Case[] = messages?.home?.cases?.list

  return (
    <main className="grow">
      <section className="container grid border-b md:grid-cols-2">
        <div className="py-12 md:border-r md:py-24 md:pr-12">
          <p className="text-muted-foreground mb-8 font-mono text-sm">
            {`// ${t('role')}`}
          </p>
          <h1 className="text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] font-bold tracking-[-0.05em]">
            {t('headline')}{' '}
            <span className="text-primary">{t('headlineAccent')}</span>
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-8 pb-12 md:py-24 md:pl-12">
          <p className="max-w-lg text-xl leading-normal text-neutral-300">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="bg-primary text-primary-foreground inline-flex min-h-12 items-center px-6 font-bold hover:opacity-90"
            >
              {t('cta.work')} →
            </Link>
            <a
              href="https://twitter.com/RenanGarcia_dev"
              target="_blank"
              rel="noreferrer noopener"
              className="border-foreground hover:border-primary hover:text-primary inline-flex min-h-12 items-center border px-6 font-medium"
            >
              {t('cta.contact')}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground overflow-hidden py-4 font-mono whitespace-nowrap">
        <h2 className="sr-only">{t('skills.title')}</h2>
        <ul className="container flex gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex gap-3 uppercase after:content-['|'] last:after:content-none hover:text-muted-foreground hover:cursor-pointer"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="container py-14 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-none font-bold tracking-[-0.04em]">
            {t('cases.title')}
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            {t('cases.label')}
          </p>
        </div>
        <ul className="bg-border grid gap-px border md:grid-cols-3">
          {cases.map((item) => (
            <li key={item.title} className="bg-background">
              <Link
                href="/work"
                className="group flex h-full flex-col gap-5 p-8"
              >
                <p className="text-primary font-mono text-xs uppercase">
                  {item.company}
                </p>
                <h3 className="group-hover:text-primary text-3xl font-bold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="leading-normal text-neutral-300">
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
