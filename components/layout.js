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
      <Footer />
    </div>
  )
}
