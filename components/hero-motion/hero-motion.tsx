import { Fragment } from 'react'
import { cn } from '@/lib/utils'

// CSS (not JS) animation so the headline paints before hydration and LCP isn't delayed
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
        <span
          className={cn('animate-rise inline-block', className)}
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          {word}
        </span>
      </span>{' '}
    </Fragment>
  ))
