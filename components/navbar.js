import React, { useState, useEffect } from 'react'
import NavButton from '@/components/navbutton'
import Link from 'next/link'
import Logo from './../public/logo.svg'
import DarkLogo from './../public/dark-logo.svg'
import { useTheme } from 'next-themes'

function Navbar({ navButtons }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <div className="container max-w-4xl mx-auto">
        <nav className="z-10 flex items-center justify-between mt-8 mb-2 md:mb-4 lg:mb-6">
          {/* Website Logo */}
          <Link href="/">
            <a>
              <Logo
                className={`h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 hover:opacity-80 transition duration-300 ${
                  theme === 'dark' ? 'hidden' : 'flex-1'
                }`}
              />
              <DarkLogo
                className={`h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 hover:opacity-80 transition duration-300 ${
                  theme === 'dark' ? 'flex-1' : 'hidden'
                }`}
              />
            </a>
          </Link>

          {/* navigation elements */}
          <div className="flex flex-row items-center" id="nav-content">
            {navButtons.map((button) => (
              <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
              />
            ))}

            {/* Dark Mode Toggle Button */}
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 ml-4 bg-gray-100 rounded-lg dark:bg-gray-50"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-black"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
    </>
  )
}
export default Navbar
