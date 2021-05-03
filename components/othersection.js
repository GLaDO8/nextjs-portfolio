import Link from 'next/link'
import Image from 'next/head'
export default function OtherSection() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-24 md:grid-cols-3">
      <Link href="/podcasts" passHref={true}>
        <div>
          <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
            <Image
              src="/images/playground.png"
              alt="Cover image for playground section"
              width={1600}
              height={900}
              layout="responsive"
            />
          </div>
          <div className="mt-2 text-base font-semibold leading-snug text-black lg:text-lg dark:text-white">
            Freelancing
          </div>
        </div>
      </Link>

      <Link href="/podcasts" passHref={true}>
        <div>
          <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
            <Image
              src="/images/playground.png"
              alt="Cover image for playground section"
              width={1600}
              height={900}
              layout="responsive"
            />
          </div>
          <div className="mt-2 text-base font-semibold leading-snug text-black lg:text-lg dark:text-white">
            Podcasts
          </div>
        </div>
      </Link>

      <Link href="/playground" passHref={true}>
        <div>
          <div className="overflow-hidden duration-500 transform cursor-pointer hover:shadow-xl hover:scale-100 rounded-xl">
            <Image
              src="/images/playground.png"
              alt="Cover image for playground section"
              width={1600}
              height={900}
              layout="responsive"
            />
          </div>
          <div className="mt-2 text-base font-semibold leading-snug text-black lg:text-lg dark:text-white">
            playground
          </div>
        </div>
      </Link>
    </div>
  )
}
