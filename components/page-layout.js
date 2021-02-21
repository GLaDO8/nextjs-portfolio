import React, { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Buttonlist from '@/components/buttonlist'
import Meta from './meta'
import Footer from '@/components/footer'

export default function Layout({ children }) {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`

      setScroll(scroll)
    }

    window.addEventListener('scroll', progressBarHandler)

    return () => window.removeEventListener('scroll', progressBarHandler)
  })
  return (
    <>
      <div>
        <div className="App">
          <div className="fixed top-0 left-0 w-full z-10">
            <div
              className="bg-black origin-top-left scale-0 h-2"
              style={{ transform: `scale(${scroll}, 1)` }}
            />
          </div>
        </div>
        <Meta />
        <div className="mx-4 md:mx-8 lg:mx-12">
          <Navbar navButtons={Buttonlist} />
        </div>
        <div>
          <main>{children}</main>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-12">
          <Footer />
        </div>
      </div>
    </>
  )
}
