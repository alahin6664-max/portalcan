"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/seguros", label: "Seguros" },
  { href: "/alimentacion", label: "Alimentación" },
  { href: "/educacion", label: "Educación" },
  { href: "/accesorios", label: "Accesorios" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2d2d2d] bg-[#111111] shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PortalCan"
            width={120}
            height={120}
            priority
          />
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-gray-300 transition-colors duration-200 hover:text-[#C8A34A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-lg p-2 text-gray-300 hover:bg-gray-600 transition"
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="lg:hidden border-t border-[#2d2d2d] bg-[#111111]">
          <div className="flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-gray-300 transition-colors hover:bg-gray-600 hover:text-[#C8A34A]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}