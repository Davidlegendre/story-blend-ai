import React, { useContext, type ServerContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import LoginProvider from "./LoginProviders";
import User from "./User";
import Menu from "./Menu";
import type { IMenu } from "@/lib/interfaces/IMenu";
import type { User as u } from "@auth/core/types";

export default function Navigation({ usersession, pathname }: { usersession: u, pathname: string}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  
  const menus : IMenu[] = [
    {
      title: "HOME",
      href: "/"
    },
    {
      title: "ABOUT",
      href: "/about"
    }
  ];
  
  const m = menus.find(e => pathname.endsWith(e.href))
  if(m) m.isActive=true

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand className="sm:hidden flex gap-4">
          <img className="w-10" src="/logoStoryBlend.png" alt="logo" />
          <Link href="/" className="font-bold text-inherit">Story Blend AI</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <img className="w-10" src="/logoStoryBlend.png" alt="logo" />
        <Link href="/" className="font-bold text-inherit">Story Blend AI</Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Menu menus={menus}></Menu>
      </NavbarContent>

      <NavbarMenu>
        <Menu menus={menus}></Menu>
      </NavbarMenu>

      <NavbarContent as="div" justify="end">
        {usersession ? (
          <User usersession={usersession}></User>
        ) : (
          <LoginProvider></LoginProvider>
        )}
      </NavbarContent>
    </Navbar>
  );
}
