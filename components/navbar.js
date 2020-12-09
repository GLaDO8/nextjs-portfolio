import NavButton from '@/components/navbutton'
import Link from 'next/link'
import Logo from './../public/logo.svg'
const Navbar = (props) => (
  <>
    <nav className="hidden md:flex justify-between bg-white p-2 lg:p-6 z-10 mb-2 md:mb-4 lg:mb-6">
      <div className="hidden md:flex">
        <Link href="/">
          <a>
            <Logo className="h-6 w-0 md:h-8 lg:h-10" />
          </a>
        </Link>
      </div>
      <div
        className="lg:flex hidden justify-end flex-1 items-center"
        id="nav-content"
      >
        {props.navButtons.map((button) => (
          <NavButton
            key={button.path}
            path={button.path}
            label={button.label}
          />
        ))}
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
