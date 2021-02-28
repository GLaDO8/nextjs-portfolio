import React from 'react'
import SocialLinks from './social-icons'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <div className="bottom-0 max-w-3xl mx-auto my-36">
      <footer>
        <div className="max-w-3xl mx-auto text-lg lg:text-xl text-inactive-gray">
          Made from scratch using{' '}
          <a
            className={`cursor-pointer hover:opacity-70 transition duration-300 ${
              theme === 'dark' ? 'link-styling-dark' : 'link-styling'
            }`}
            href="https://nextjs.org"
            rel="noopener"
            target="_blank"
          >
            Next.js
          </a>
          ,{' '}
          <a
            className={`cursor-pointer hover:opacity-70 transition duration-300 ${
              theme === 'dark' ? 'link-styling-dark' : 'link-styling'
            }`}
            href="https://vercel.com"
            rel="noopener"
            target="_blank"
          >
            Vercel
          </a>{' '}
          and{' '}
          <a
            className={`cursor-pointer hover:opacity-70 transition duration-300 ${
              theme === 'dark' ? 'link-styling-dark' : 'link-styling'
            }`}
            href="https://tailwindcss.com"
            rel="noopener"
            target="_blank"
          >
            Tailwind CSS
          </a>
          . The code is{' '}
          <a
            className={`cursor-pointer hover:opacity-70 transition duration-300 ${
              theme === 'dark' ? 'link-styling-dark' : 'link-styling'
            }`}
            href="https://github.com/GLaDO8/nextjs-portfolio"
            rel="noopener"
            target="_blank"
          >
            open-source
          </a>
          .
        </div>
        <SocialLinks />
        <div className="text-sm text-inactive-gray flex justify-start font-light">
          © 2020-2077 by Shreyas Gupta, All rights reserved.
        </div>
      </footer>
    </div>
  )
}
