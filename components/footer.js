import React from 'react'
import SocialLinks from './social-icons'

export default function Footer() {
  //dark mode link styling for footer
  function LinkStyleTag(linkText, link) {
    return (
      <a
        className="font-medium text-white transition duration-300 cursor-pointer hover:opacity-70"
        href={link}
        rel="noopener"
        target="_blank"
      >
        {linkText}
      </a>
    )
  }

  return (
    <div className="bottom-0 max-w-4xl mx-auto my-36 lazy-renderer">
      <footer>
        <div className="text-lg lg:text-xl text-inactive-gray">
          Made from scratch using{' '}
          {LinkStyleTag('Next.js', 'https://nextjs.org')},{' '}
          {LinkStyleTag('Vercel', 'https://vercel.com')} and{' '}
          {LinkStyleTag('Tailwind CSS', 'https://tailwindcss.com')}. The code is{' '}
          {LinkStyleTag(
            'open-source',
            'https://github.com/GLaDO8/nextjs-portfolio',
          )}
          .
        </div>
        <SocialLinks />
        <div className="flex justify-start text-sm font-normal text-inactive-gray">
          © Shreyas Gupta 2021-2077.
        </div>
      </footer>
    </div>
  )
}
