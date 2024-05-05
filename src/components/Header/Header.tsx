import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar className="w-[60%] h-16 mx-auto rounded-full border-1 border-sky-400 shadow-lg mt-5">
      <NavbarContent className="flex !justify-center w-full">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blogs">
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
