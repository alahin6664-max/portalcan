import Link from "next/link";
import { NavbarLink as NavbarLinkType } from "./Navbar.types";
import { styles } from "./Navbar.styles";

interface Props {
  link: NavbarLinkType;
}

export function NavbarLink({ link }: Props) {
  return (
    <Link
      href={link.href}
      className={styles.link}
    >
      {link.label}
    </Link>
  );
}