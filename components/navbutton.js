import Link from 'next/link'
import { withRouter } from 'next/router' //withRouter adds the router prop to the const

//use the router prop to get the pathname, split it on '/' and style the link by giving it a classname which matches the base path (/writing, /portfolio)
const NavButton = (props) => (
  <Link href={props.path}>
    <div
      className={`menu-btn-lg cursor-pointer ${
        `/${props.router.pathname.split('/')[1]}` === props.path
          ? 'menu-btn-lg-active'
          : ''
      }`}
    >
      {props.label}
    </div>
  </Link>
)

export default withRouter(NavButton)
