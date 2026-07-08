import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Marca */}
          <div>
            <h2 className="text-2xl font-bold text-sky-700">
              EliteCan
            </h2>

            <p className="mt-4 text-gray-600">
              Comparativas, guías y herramientas para ayudarte a cuidar mejor de tu perro.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">
              Secciones
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/seguros" className="hover:text-sky-700">
                  Seguros
                </Link>
              </li>

              <li>
                <Link href="/alimentacion" className="hover:text-sky-700">
                  Alimentación
                </Link>
              </li>

              <li>
                <Link href="/educacion" className="hover:text-sky-700">
                  Educación
                </Link>
              </li>

              <li>
                <Link href="/accesorios" className="hover:text-sky-700">
                  Accesorios
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-sky-700">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">
              Información
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/aviso-legal" className="hover:text-sky-700">
                  Aviso legal
                </Link>
              </li>

              <li>
                <Link href="/politica-privacidad" className="hover:text-sky-700">
                  Política de privacidad
                </Link>
              </li>

              <li>
                <Link href="/politica-cookies" className="hover:text-sky-700">
                  Política de cookies
                </Link>
              </li>

              <li>
                <Link href="/contacto" className="hover:text-sky-700">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EliteCan. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}