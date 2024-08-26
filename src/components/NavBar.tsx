"use client";

import { HiArrowRight as ArrowRight } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 h-16 w-[100%] bg-background z-20 border-b-2 border-dashed border-opacity-40 border-primary">
        <div className="mx-[15%] h-full flex justify-between">
          <div className="my-auto p-2">
            <ul className="flex gap-4 text-primary text-xl">
              <li className="hover:text-secondary">
                <Link href="/" className="flex items-center">
                  {pathName === "/" && <ArrowRight />}
                  <span>Viktor Stefanov</span>
                </Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/posts" className="flex items-center">
                  {pathName === "/posts" && <ArrowRight />}
                  <span>Blog Posts</span>
                </Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/about" className="flex items-center">
                  {pathName === "/about" && <ArrowRight />}
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-auto p-2">
            <input type="text" placeholder="Search blog posts..." />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
