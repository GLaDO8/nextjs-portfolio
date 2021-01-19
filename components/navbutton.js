import Link from 'next/link'
import { withRouter } from 'next/router'

const NavButton = (props) => (
  <Link href={props.path} passHref={true}>
    <div
      className={`menu-btn-lg cursor-pointer ${
        props.router.pathname === props.path ? 'menu-btn-lg-active' : ''
      }`}
    >
      {props.label}
    </div>
  </Link>
)

export default withRouter(NavButton)
