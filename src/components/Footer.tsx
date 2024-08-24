import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-primary text-center w-[70%] flex justify-end m-auto px-4">
      <p className="p-4 text-lg">
        &copy; 2024 Viktor Stefanov All right reserved.
      </p>
      <div className="flex self-center gap-4">
        <Link href="https://github.com/Viktor-stefanov">
          <BsGithub className="size-7" />
        </Link>
        <Link href="https://www.linkedin.com/in/viktor-stefanov-612703224/">
          <BsLinkedin className="size-7" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
