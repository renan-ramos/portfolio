import { useMessages, useTranslations } from 'next-intl'

const Work = () => {
  const t = useTranslations('work')
  const messages = useMessages()
  const experiences = messages?.work?.experiences

  return (
    <main className="container grow">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {t('title')}
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>{t('description')}</p>
        <hr className="mt-6 border-neutral-100 dark:border-neutral-800" />

        {experiences?.map((experience: any) => (
          <div
            key={experience?.name}
            className="border-b border-solid border-neutral-100 py-6 dark:border-neutral-800"
          >
            <h2 className="mb-1 text-xl font-medium tracking-tighter">
              {experience?.name}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {experience?.role}
            </p>
            <p className="py-4">{experience?.description}</p>

            <ul className="flex flex-col gap-4">
              {experience?.list?.map((item: string) => (
                <li
                  key={item}
                  className="list ml-8 list-disc marker:text-neutral-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Work
