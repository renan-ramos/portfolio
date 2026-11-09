'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'

const TYPE_DELAY_MS = 95
const ENTER_DELAY_MS = 700
// Give up waiting for the route so a failed navigation never traps the user
const MAX_WAIT_MS = 4000

// eslint-disable-next-line no-unused-vars
type Navigate = (target: string) => void

const PageTransitionContext = createContext<Navigate | null>(null)

// null outside the provider: callers fall back to their normal navigation
export const usePageTransition = () => useContext(PageTransitionContext)

// Falls back to a plain push when there is no provider or motion is reduced
export const useTransitionNavigate = (): Navigate => {
  const router = useRouter()
  const transition = usePageTransition()

  return transition ?? router.push
}

export const toCommand = (href: string) => {
  const path = href.split(/[?#]/)[0].replace(/\/$/, '')

  return `cd ~${path}`
}

export const PageTransitionProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const [href, setHref] = useState<string | null>(null)
  const [seenPath, setSeenPath] = useState(pathname)
  const [typed, setTyped] = useState(0)
  const [entered, setEntered] = useState(false)
  // Any route change (link, shortcut or browser back/forward) ends the overlay
  if (seenPath !== pathname) {
    setSeenPath(pathname)
    setHref(null)
  }
  const command = href ? toCommand(href) : ''

  const navigate = useCallback<Navigate>(
    (target) => {
      const targetPath = target.split(/[?#]/)[0] || '/'

      if (reduceMotion || targetPath === pathname) return router.push(target)
      if (href) return
      setTyped(0)
      setEntered(false)
      setHref(target)
    },
    [reduceMotion, pathname, router, href]
  )

  useEffect(() => {
    if (!href) return
    if (typed < command.length) {
      const timer = setTimeout(() => setTyped(typed + 1), TYPE_DELAY_MS)
      return () => clearTimeout(timer)
    }
    const timer = setTimeout(() => {
      setEntered(true)
      router.push(href)
    }, ENTER_DELAY_MS)
    return () => clearTimeout(timer)
  }, [href, typed, command.length, router])

  useEffect(() => {
    if (!href) return
    const timer = setTimeout(() => setHref(null), MAX_WAIT_MS)
    return () => clearTimeout(timer)
  }, [href])

  return (
    <PageTransitionContext value={navigate}>
      {children}
      <AnimatePresence>
        {href && (
          <motion.div
            key="terminal"
            aria-hidden="true"
            className="bg-background fixed inset-0 z-50 flex flex-col justify-center px-4 font-mono text-lg md:px-16 md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: '-2%',
              transition: { delay: 0.35, duration: 0.4 }
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              {'// renan.garcia — tty1'}
            </p>
            <p>
              <span className="text-primary">$ </span>
              {command.slice(0, typed)}
              <motion.span
                className="bg-primary ml-1 inline-block h-[1em] w-[0.6em] translate-y-[0.15em]"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </p>
            {entered && (
              <p className="text-muted-foreground mt-3 text-sm md:text-base">
                loading…
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransitionContext>
  )
}
