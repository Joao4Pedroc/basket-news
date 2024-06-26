import { HiCog, HiUser } from "react-icons/hi";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-[#FFA057] flex gap-[5rem] h-20 w-full items-center justify-between">
      <span>**IMAGE**</span>
      <Navigation />
      <div className="flex mr-[5rem] gap-5">
        <HiCog />
        <HiUser />
      </div>
    </header>
  );
}

export default Header;
