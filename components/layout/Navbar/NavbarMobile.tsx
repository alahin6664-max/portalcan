import { Button } from "@/components/ui/Button";
import { NavbarLink } from "./NavbarLink";
import { NavbarLink as NavbarLinkType } from "./Navbar.types";
import { styles } from "./Navbar.styles";

interface Props {
  links: NavbarLinkType[];
}

export function NavbarMobile({
  links,
}: Props) {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileContent}>
        {links.map((link) => (
          <NavbarLink
            key={link.href}
            link={link}
          />
        ))}

        <Button variant="ghost">
          Entrar
        </Button>

        <Button>
          Comenzar
        </Button>
      </div>
    </div>
  );
}