import Link from "next/link";
import Logo from "./../public/logo.svg";

export default function Intro() {
  return (
    <>
      <nav class="container m-auto mt-12 flex items-center justify-between flex-wrap p-6">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link href="/">
              <a>
                <img src={Logo} />
              </a>
            </Link>
          </div>
          <div>
            <div
              href="#"
              class="inline-block transition duration-300 ease-in-out text-xl px-4 py-2 m-2 leading-none hover:bg-black rounded-full hover:text-white"
            >
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </div>
            <div
              href="#"
              class="inline-block transition duration-500 ease-in-out text-xl px-4 py-2 m-2 leading-none hover:bg-black rounded-full hover:text-white"
            >
              <Link href="/writing">
                <a>Writings</a>
              </Link>
            </div>
            <div
              href="#"
              class="inline-block transition duration-500 ease-in-out text-xl px-4 py-2 m-2 leading-none hover:bg-black rounded-full hover:text-white"
            >
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div
              href="#"
              class="inline-block transition duration-500 ease-in-out text-xl px-4 py-2 m-2 leading-none hover:bg-black rounded-full hover:text-white"
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
            <div
              href="#"
              class="inline-block transition duration-500 ease-in-out text-xl px-4 py-2 m-2 leading-none hover:bg-black rounded-full hover:text-white"
            >
              <Link href="/">
                <a>More</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
