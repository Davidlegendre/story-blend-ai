import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
} from "@nextui-org/react";
import { signIn } from "auth-astro/client";

export default function LoginProvider() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button as={Link} color="primary" variant="flat">
          Login With
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Login Actions" variant="flat">
        <DropdownItem key="google" onClick={() => {signIn("google")}}>
          <div className="flex flex-wrap flex-row gap-3 items-center">
          <Image src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" height={20} alt="google logo"></Image>
          <p className="font-semibold">Google</p>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
