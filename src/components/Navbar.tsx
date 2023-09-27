import { Search } from "@/components";
import Link from "next/link";

export const Navbar = () => (
  <header className="bg-black sticky top-0 z-10">
    <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
      <h1 className="text-2xl text-center whitespace-nowrap sm:text-3xl ">
        <Link href="/">Next.js Image Gallery</Link>
      </h1>
      <Search />
    </nav>
  </header>
);
