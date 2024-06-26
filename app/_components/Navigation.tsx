import Link from "next/link";
import { HiCog } from "react-icons/hi";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex justify-between gap-[5rem]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Games</Link>
        </li>
        <li>
          <Link href="/">Predictions</Link>
        </li>
        <li>
          <Link href="/">Community</Link>
        </li>
      </ul>
    </nav>
  );
}
