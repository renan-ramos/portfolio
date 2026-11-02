import { useMessages, useTranslations } from 'next-intl'

const Work = () => {
  const t = useTranslations('work')
  const messages = useMessages()
  const experiences = messages?.work?.experiences

  return (
    <main className="container grow py-14 md:py-24">
      <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-bold tracking-[-0.04em]">
        {t('title')}
      </h1>
      <p className="text-muted-foreground mt-6 mb-12 font-mono text-sm">
        {`// ${t('description')}`}
      </p>

      <ol className="border-t">
        {experiences?.map((experience: any, index: number) => (
          <li
            key={experience?.name}
            className="grid gap-6 border-b py-10 last:border-b-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <div>
              <p className="text-primary font-mono text-xs">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
                {experience?.name}
              </h2>
              <p className="text-muted-foreground mt-2 font-mono text-sm">
                {experience?.role}
              </p>
            </div>
            <div className="leading-relaxed text-neutral-300">
              <p>{experience?.description}</p>
              {experience?.list && (
                <ul className="mt-6 flex flex-col gap-4">
                  {experience.list.map((item: string) => (
                    <li
                      key={item}
                      className="before:text-primary flex gap-3 before:font-mono before:content-['→']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </main>
  )
}

export default Work
