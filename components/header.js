import Link from "next/link";
import Logo from "./../public/logo.svg";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <img src={Logo} />
      </Link>
    </h2>
  );
}
