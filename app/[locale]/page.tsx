import { useMessages, useTranslations } from 'next-intl'
import { ContactDrawer } from '@/components/contact-drawer/contact-drawer'
import { NavigationLink } from '@/components/navigation-link/navigation-link'
import { cn } from '@/lib/utils'

type Case = {
  company: string
  work: number
  title: string
  stack: string[]
  description: string
}

const Home = () => {
  const t = useTranslations('home')
  const messages = useMessages()
  const skills: string[] = messages?.home?.skills?.list
  const cases: Case[] = messages?.home?.cases?.list

  return (
    <main className="grow">
      <section className="container border-b pt-12 pb-12 md:pt-20 md:pb-20">
        <p className="text-muted-foreground mb-8 font-mono text-sm">
          {`// ${t('role')}`}
        </p>
        <h1 className="text-[clamp(3.5rem,11vw,11rem)] leading-[0.86] font-bold tracking-tighter">
          {t('headline')}{' '}
          <span className="text-primary">{t('headlineAccent')}</span>
        </h1>
        <div className="mt-12 grid gap-8 border-t pt-8 md:mt-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-xl text-xl leading-normal text-neutral-300">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-3">
            <NavigationLink
              href="/work"
              className="bg-primary text-primary-foreground inline-flex min-h-12 items-center px-6 font-bold hover:opacity-90"
            >
              {t('cta.work')} →
            </NavigationLink>
            <ContactDrawer className="border-foreground hover:border-primary hover:text-primary inline-flex min-h-12 items-center border px-6 font-medium">
              {t('cta.contact')}
            </ContactDrawer>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground overflow-hidden py-4 font-mono whitespace-nowrap">
        <h2 className="sr-only">{t('skills.title')}</h2>
        <ul className="container flex flex-wrap gap-x-3 gap-y-1">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex gap-3 uppercase after:content-['|'] last:after:content-none"
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
        <ol className="border-t">
          {cases.map((item, index) => (
            <li key={item.title} className="border-b">
              <NavigationLink
                href={`/work#work-${item.work}`}
                className={cn(
                  'group hover:bg-primary hover:text-primary-foreground focus-visible:outline-foreground flex flex-col px-6 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2',
                  index === 0 ? 'py-12 md:py-20' : 'py-8 md:py-10'
                )}
              >
                <h3
                  className={cn(
                    index === 0
                      ? 'text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-tighter'
                      : 'text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.05] tracking-[-0.03em]',
                    'font-bold'
                  )}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground mt-3 font-mono text-xs uppercase">
                  {item.company}
                </p>
                <p
                  className={cn(
                    index === 0
                      ? 'mt-6 text-xl md:text-2xl'
                      : 'mt-3 text-base md:text-lg',
                    'group-hover:text-primary-foreground max-w-152 leading-normal text-neutral-300'
                  )}
                >
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-muted-foreground group-hover:border-primary-foreground group-hover:text-primary-foreground border px-2.5 py-1 font-mono text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </NavigationLink>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}

export default Home
