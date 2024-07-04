"use client";

import { useUser } from "../_context/UserContext";
import Navigation from "./Navigation";

function Header() {
  const { state } = useUser();
  console.log(state);
  return (
    <header className="bg-[#FFA057] flex h-20 w-screen items-center text-md">
      <Navigation />
    </header>
  );
}

export default Header;
