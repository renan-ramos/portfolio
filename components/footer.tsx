const ArrowIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const Footer = () => {
  return (
    <footer className="container mt-auto">
      <ul className="flex flex-col gap-2 text-neutral-600 dark:text-neutral-300 md:flex-row">
        <li>
          <a
            href="https://twitter.com/RenanGarcia_dev"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            <ArrowIcon /> <p className="h-7">follow me</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/renan-ramos"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            <ArrowIcon /> <p className="h-7">spy some code</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
