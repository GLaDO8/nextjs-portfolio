import NavButton from '@/components/navbutton'
import Link from 'next/link'
import Logo from './../public/logo.svg'
const Navbar = (props) => (
  <>
    <div className="container mx-auto max-w-xl lg:max-w-3xl">
      <nav className="flex justify-between mt-8 z-10 mb-2 md:mb-4 lg:mb-6">
        <div>
          <Link href="/">
            <a>
              <Logo className="h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18" />
            </a>
          </Link>
        </div>
        <div className="flex flex-row items-center" id="nav-content">
          {props.navButtons.map((button) => (
            <NavButton
              key={button.path}
              path={button.path}
              label={button.label}
            />
          ))}
        </div>
      </nav>
    </div>
  </>
)

export default Navbar
