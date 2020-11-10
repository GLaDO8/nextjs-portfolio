import Navbar from "@/components/navbar";
import Buttonlist from "@/components/buttonlist";
import Meta from "./meta";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar navButtons={Buttonlist} />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
