import NavButton from '@/components/navbutton'
import Link from 'next/link'
import Logo from './../public/newlogo.svg'

const Navbar = (props) => (
  <>
    <nav className="hidden md:flex justify-between bg-white p-2 lg:p-6 z-10 mt-4 md:mt-8 lg:mt-12 mb-2 md:mb-4 lg:mb-6">
      <div className="hidden md:flex mr-2 lg:mr-6">
        <Link href="/">
          <a>
            <Logo className="h-10 md:h-12 lg:h-16" />
          </a>
        </Link>
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

    <nav>
      <div className="flex md:hidden my-4">
        <div className="flex-1">
          <Link href="/">
            <a>
              <Logo className="h-10" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  </>
)

export default Navbar
