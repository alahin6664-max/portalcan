"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { styles } from "./Navbar.styles";
import { NavbarProps } from "./Navbar.types";
import { NavbarLink } from "./NavbarLink";
import { NavbarMobile } from "./NavbarMobile";

const defaultLinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Funcionalidades",
    href: "#features",
  },
  {
    label: "Precios",
    href: "#pricing",
  },
  {
    label: "Blog",
    href: "#blog",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export function Navbar({
  links = defaultLinks,
}: NavbarProps) {

  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>

      <div className={styles.container}>

        <Link
          href="/"
          className={styles.logo}
        >
          <span className="text-2xl font-bold text-primary">
            PortalCan
          </span>
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => (
            <NavbarLink
              key={link.href}
              link={link}
            />
          ))}
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost">
            Entrar
          </Button>

          <Button>
            Comenzar
          </Button>
        </div>

        <Button
          variant="ghost"
          className={styles.mobileButton}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </Button>

      </div>

      {open && (
        <NavbarMobile links={links} />
      )}

    </header>
  );
}