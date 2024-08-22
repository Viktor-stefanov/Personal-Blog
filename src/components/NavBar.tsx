import Link from "next/link";

const NavBar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <nav className="border-b-2 border-dashed border-opacity-40 border-primary">
        <div className="m-4 p-2">
          <ul className="flex gap-4 text-primary text-xl">
            <li className="hover:text-secondary">
              <Link href="/">Viktor Stefanov</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/posts">Blog Posts</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>{/* Create a search for blog posts. */}</div>
      </nav>
      {children}
    </>
  );
};

export default NavBar;
