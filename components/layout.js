import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <div className="mx-6 lg:mx-8">
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
