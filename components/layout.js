import Footer from './footer'
import Meta from './meta'
import Buttonlist from './buttonlist'
import Navbar from './navbar'

export default function Layout({ preview, children }) {
  return (
    <div className="mx-4 lg:mx-8">
      <Meta />
      <Navbar navButtons={Buttonlist} />
      <div className="max-w-4xl mx-auto">
        <main>{children}</main>
      </div>
      <hr
        class="mb-8 mt-16 md:mb-24 md:mt-28 border-1 border-neutral-800"
        aria-hidden="true"
      />
      <Footer contentArea="home" />
    </div>
  )
}
