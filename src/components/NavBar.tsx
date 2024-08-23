"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowRight from "./icons/ArrowRight";

const NavBar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <>
      <nav className="fixed top-0 left-0 w-[100%] bg-background z-10 border-b-2 border-dashed border-opacity-40 border-primary">
        <div className="mx-[15%] flex justify-between">
          <div className="my-4 p-2">
            <ul className="flex gap-4 text-primary text-xl">
              <li className="hover:text-secondary ">
                <Link href="/">
                  {pathName === "/" && <ArrowRight />}Viktor Stefanov
                </Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/posts">
                  {pathName === "/posts" && <ArrowRight />}Blog Posts
                </Link>
              </li>
              <li className="hover:text-secondary">
                {pathName === "/about" && <ArrowRight />}
                <Link href="/about">
                  {pathName === "/posts" && <ArrowRight />}About
                </Link>
              </li>
            </ul>
          </div>
          <div className="m-4 p-2">
            <input type="text" placeholder="Search blog posts..." />
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default NavBar;
