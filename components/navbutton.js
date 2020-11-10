import Link from "next/link";
import { withRouter } from "next/router";

const NavButton = (props) => (
  <Link href={props.path}>
    <div
      className={`menu-btn-lg ${
        props.router.pathname === props.path ? "menu-btn-lg-active" : ""
      }`}
    >
      <a>{props.label}</a>
    </div>
  </Link>
);

export default withRouter(NavButton);
