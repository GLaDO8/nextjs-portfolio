import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer>
      <hr className="border-accent-2 -mb-16 md:-mb-24 w-11/12 mx-auto" />
      <div className="md:invisible">
        <div className="flex justify-center">
          <div className="text-xs text-inactive-gray max-w-sm font-light">
            © 2020 by Shreyas Gupta, All rights reserved.
          </div>
        </div>
        <div className="flex justify-center flex-1 items-center">
          <div className="footer-btn py-4 pr-4">Meta</div>
          <div className="footer-btn py-4 pr-4">
            <Link href="/thoughtboard">Thought Board</Link>
          </div>
          <div className="text-xs footer-btn py-4">Source</div>
        </div>
      </div>
      <div className="items-center w-auto hidden md:flex">
        <div className="text-sm text-inactive-gray flex justify-start py-4 p-8">
          © 2020-2077 by Shreyas Gupta, All rights reserved.
        </div>
        <div className="flex justify-end flex-1 items-center p-8">
          <div className="footer-btn py-4 pr-4">META</div>
          <div className="footer-btn py-4 pr-4">
            <Link href="/thoughtboard">THOUGHT BOARD</Link>
          </div>
          <div className="footer-btn py-4">SOURCE</div>
        </div>
      </div>
    </footer>
  )
}
