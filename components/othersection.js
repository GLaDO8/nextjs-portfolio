import Link from 'next/link'
import Image from 'next/head'
export default function OtherSection() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-3">
        <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
          <Image
            src="./../public/images/playground.png"
            alt="Cover image for playground section"
            width={1600}
            height={900}
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
          <Image
            src="./../public/images/playground.png"
            alt="Cover image for playground section"
            width={1600}
            height={900}
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
          <Image
            src="./../images/playground.png"
            alt="Cover image for playground section"
            width={1600}
            height={900}
            layout="responsive"
          />
        </div>
      </div>
    </>
  )
}
