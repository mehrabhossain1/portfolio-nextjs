"use client";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionButtonOutline from "../Button/MotionButtonOutline";

const Header = () => {
  const pathname = usePathname();

  return (
    <Navbar className="w-full md:w-[60%] h-16 mx-auto rounded-full border-1 border-sky-400 shadow-lg mt-5">
      <NavbarContent className="flex !justify-center w-full">
        <NavbarItem>
          <Link className={pathname === "/" ? "text-sky-400" : ""} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/about" ? "text-sky-400" : ""}
            href="/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/projects" ? "text-sky-400" : ""}
            href="/projects"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/skills" ? "text-sky-400" : ""}
            href="/skills"
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/blogs" ? "text-sky-400" : ""}
            href="/blogs"
          >
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/dashboard" ? "text-sky-400" : ""}
            href="/dashboard"
            // comment
            // comment 2
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <MotionButtonOutline>
            <Link
              href="/mehrabhossainresume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </MotionButtonOutline>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
