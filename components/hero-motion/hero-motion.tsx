import { Fragment } from 'react'
import * as motion from 'motion/react-client'
import { cn } from '@/lib/utils'

const ease = [0.16, 1, 0.3, 1] as const

export const Words = ({
  text,
  className
}: {
  text: string
  className?: string
}) =>
  text.split(' ').map((word, i) => (
    <Fragment key={i}>
      <span className="inline-block overflow-hidden pb-[0.12em] align-top">
        <motion.span
          className={cn('inline-block', className)}
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease, delay: i * 0.07 }}
        >
          {word}
        </motion.span>
      </span>{' '}
    </Fragment>
  ))

export const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay }
})
