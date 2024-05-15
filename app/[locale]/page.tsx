import { useMessages, useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations('home')
  const messages = useMessages()
  const skills = messages?.home?.skills?.list

  return (
    <main className="container">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {t('hello')}
      </h1>
      <p className="prose prose-neutral dark:prose-invert mb-5">
        {t('description')}
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <h2 className="mb-8 text-xl font-medium tracking-tighter">Skills</h2>
      <p>{t('skills.description')}</p>

      <ul className="my-4 flex flex-wrap gap-2 text-neutral-600 dark:text-neutral-300 md:flex-row">
        {skills.map((skill: string) => (
          <li
            key={skill}
            className="border-r-2 border-r-neutral-800 pr-2 font-medium last:border-r-0"
          >
            {skill}
          </li>
        ))}
      </ul>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
    </main>
  )
}

export default Home
