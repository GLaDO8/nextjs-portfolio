import NavButton from '@/components/navbutton'
import Link from 'next/link'
import Logo from './../public/newlogo.svg'

const Navbar = (props) => (
  <>
    <nav className="flex items-center justify-between flex-wrap shadow-xl bg-white p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <a>
            <Logo className="h-10 md:h-12 lg:h-20" />
          </a>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0"
        id="nav-content"
      >
        <div className="lg:flex justify-end flex-1 items-center">
          {props.navButtons.map((button) => (
            <NavButton
              key={button.path}
              path={button.path}
              label={button.label}
            />
          ))}
        </div>
      </div>
    </nav>
  </>
)

export default Navbar
