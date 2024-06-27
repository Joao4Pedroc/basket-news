import Link from "next/link";
import { HiCog, HiUser } from "react-icons/hi";

export default function Navigation() {
  return (
    <nav className="flex justify-between w-full ">
      <span className="ml-8">**IMAGE**</span>
      <ul className="flex gap-14">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/games">Games</Link>
        </li>
        <li>
          <Link href="/predictions">Predictions</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
      <div className="flex gap-10 mr-8">
        <HiCog />
        <HiUser />
      </div>
    </nav>
  );
}
