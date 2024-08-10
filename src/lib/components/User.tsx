import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut } from "auth-astro/client";
import type {  User } from "@auth/core/types";

export default function User({ usersession }: { usersession: User }) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={usersession.name}
          size="sm"
          src={usersession.image}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">User</p>
          <p className="font-semibold">{usersession.email}</p>
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
  );
};
