import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="EliteCan"
            width={48}
            height={48}
            priority
          />
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-sky-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}