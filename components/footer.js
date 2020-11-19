import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="">
      <>
        <div className="flex items-center w-auto">
          <div className="text-inactive-gray flex justify-start p-4 pl-6 lg:pl-8">
            © Copyright 2020-2077, I hope?
          </div>
          <div className="flex justify-end flex-1 items-center">
            <div className="text-inactive-gray p-4">META</div>
            <div className="text-inactive-gray p-4">
              <Link href="/thoughtboard">THOUGHT BOARD</Link>
            </div>
            <div className="text-inactive-gray p-4 pr-6 lg:pr-8">SOURCE</div>
          </div>
        </div>
      </>
    </footer>
  )
}
