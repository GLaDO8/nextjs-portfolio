import NavButton from '@/components/navbutton'
import Link from 'next/link'
import Logo from './../public/logo.svg'
import DarkLogo from './../public/dark-logo.svg'
import { useTheme } from 'next-themes'

function Navbar({ navButtons }) {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="container mx-auto lg:max-w-3xl">
        <nav className="flex justify-between mt-8 z-10 mb-2 md:mb-4 lg:mb-6">
          <div>
            <Link href="/">
              <a>
                <Logo
                  className={`h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 ${
                    theme === 'dark' ? 'hidden' : 'flex-1'
                  }`}
                />
                <DarkLogo
                  className={`h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 ${
                    theme === 'dark' ? 'flex-1' : 'hidden'
                  }`}
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-row items-center" id="nav-content">
            {navButtons.map((button) => (
              <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
              />
            ))}
            <button
              className="p-2 md:p-3 lg:p-4 text-white dark:text-black bg-gray-300 dark:bg-gray-50 bg-opacity-50 font-semibold rounded-md ml-4"
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
              }}
            >
              <img
                src="https://s2.svgbox.net/hero-solid.svg?ic=moon&color=000"
                className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${
                  theme === 'dark' ? 'hidden' : 'flex-1'
                }`}
              />
              <img
                src="https://s2.svgbox.net/hero-solid.svg?ic=sun&color=000"
                className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${
                  theme === 'dark' ? 'flex-1' : 'hidden'
                }`}
              />
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar
