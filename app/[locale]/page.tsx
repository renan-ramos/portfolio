import { useMessages, useTranslations } from 'next-intl'
import { ContactDrawer } from '@/components/contact-drawer/contact-drawer'
import { NavigationLink } from '@/components/navigation-link/navigation-link'

type Case = { company: string; title: string; description: string }

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
        <ul className="container flex gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="hover:text-muted-foreground flex gap-3 uppercase after:content-['|'] last:after:content-none hover:cursor-pointer"
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
              <NavigationLink
                href="/work"
                className="group flex h-full flex-col justify-between gap-5 p-8 transition-colors hover:bg-neutral-900 md:min-h-80"
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
              </NavigationLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
