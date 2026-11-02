import { useTranslations } from 'next-intl'
import { ContactDrawer } from '@/components/contact-drawer/contact-drawer'

export const Footer = () => {
  const t = useTranslations('application.footer')

  return (
    <footer className="container border-t pt-12 pb-8 md:pt-24">
      <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
        {t('prompt')}
      </p>
      <ContactDrawer className="hover:text-primary mt-4 mb-16 block text-left text-[clamp(3rem,10vw,10rem)] leading-[0.9] font-bold tracking-[-0.06em] transition-colors">
        {t('talk')}
        <span
          aria-hidden="true"
          className="text-primary ml-[0.15em] align-middle text-[0.4em]"
        >
          →
        </span>
      </ContactDrawer>
      <div className="flex flex-wrap justify-between gap-4 border-t pt-6 font-mono text-sm">
        <span className="text-muted-foreground">© 2026 Renan Garcia</span>
        <ul className="flex gap-8">
          <li>
            <a
              href="https://github.com/renan-ramos"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-primary transition-colors"
            >
              {t('code')}
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/RenanGarcia_dev"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-primary transition-colors"
            >
              {t('follow')}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
