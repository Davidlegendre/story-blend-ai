import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
const { signOut } = await import("auth-astro/client");

import type { IUserModel } from "../interfaces/user.interface";
import LoginProvider from "./LoginProviders";

export default function Navigation({ usersession }: { usersession? }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand className="sm:hidden flex gap-4">
          <img className="w-10" src="/logoStoryBlend.png" alt="logo" />
          <p className="font-bold text-inherit">Story Blend AI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
      <img className="w-10" src="/logoStoryBlend.png" alt="logo" />
      <p className="font-bold text-inherit">Story Blend AI</p>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarMenu>

      <NavbarContent as="div" justify="end">
        {usersession ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={usersession.fullName}
                size="sm"
                src={usersession.photoUser}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">User</p>
                <p className="font-semibold">{usersession.fullName}</p>
              </DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem
                key="logout"
                onClick={() => {
                  signOut();
                }}
                color="danger"
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <LoginProvider></LoginProvider>
        )}
      </NavbarContent>
    </Navbar>
  );
}
