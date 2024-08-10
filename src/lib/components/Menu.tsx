import { NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import type { IMenu } from "@/lib/interfaces/IMenu";



export default function Menu({ menus }: { menus: IMenu[] }) {
  return !menus ? (
    <></>
  ) : (
    menus.map((m) => {
      return (
        <NavbarItem key={m.title} isActive={m.isActive}>
          <Link color={m.isActive? 'secondary': 'foreground'} href={m.href} aria-current="page">
            {m.title}
          </Link>
        </NavbarItem>
      );
    })
  );
}
