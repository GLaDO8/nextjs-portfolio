import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer>
      <div className="flex items-center w-auto ">
        <div className="text-inactive-gray flex justify-start py-4">
          © Copyright 2020-2077, I hope?
        </div>
        <div className="flex justify-end flex-1 items-center">
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
