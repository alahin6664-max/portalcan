import Link from "next/link";
import {
  ShieldCheck,
  Bone,
  GraduationCap,
  UtensilsCrossed,
  ArrowRight,
  HeartHandshake,
  Search,
  Dog,
} from "lucide-react";

const categories = [
  {
    title: "Seguros",
    description: "Compara las mejores aseguradoras para proteger a tu perro.",
    href: "/seguros",
    icon: ShieldCheck,
  },
  {
    title: "Alimentación",
    description: "Encuentra el pienso y la alimentación más adecuada.",
    href: "/alimentacion",
    icon: UtensilsCrossed,
  },
  {
    title: "Educación",
    description: "Guías prácticas para cachorros y perros adultos.",
    href: "/educacion",
    icon: GraduationCap,
  },
  {
    title: "Accesorios",
    description: "Arneses, GPS, camas, juguetes y mucho más.",
    href: "/accesorios",
    icon: Bone,
  },
];

const features = [
  {
    icon: Search,
    title: "Comparativas objetivas",
    description: "Analizamos productos y servicios para ayudarte a decidir.",
  },
  {
    icon: HeartHandshake,
    title: "Experiencia real",
    description: "Contenido basado en educación canina y experiencia práctica.",
  },
  {
    icon: Dog,
    title: "Herramientas útiles",
    description: "Calculadoras y recursos gratuitos para propietarios.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}

      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
            Tu portal sobre el mundo canino
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Todo lo que necesitas para cuidar mejor de tu perro
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-600">
            Comparativas independientes, guías prácticas y herramientas para ayudarte
            a tomar mejores decisiones sobre alimentación, educación, salud y accesorios.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="rounded-xl bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
            >
              Explorar guías
            </Link>

            <Link
              href="/herramientas"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold transition hover:border-sky-500 hover:text-sky-700"
            >
              Ver herramientas
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Explora nuestras categorías
          </h2>

          <p className="mt-4 text-gray-600">
            Toda la información organizada para que encuentres rápidamente lo que buscas.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <Link
                key={category.href}
                href={category.href}
                className="group rounded-2xl border bg-white p-8 transition hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
              >

                <Icon
                  size={42}
                  className="text-sky-600 transition group-hover:scale-110"
                />

                <h3 className="mt-6 text-2xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center font-medium text-sky-600">
                  Descubrir
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>

              </Link>
            );
          })}
        </div>

      </section>

      {/* POR QUÉ ELITECAN */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              ¿Por qué confiar en EliteCan?
            </h2>

            <p className="mt-4 text-gray-600">
              Queremos convertirnos en la referencia para cualquier propietario de perro.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-8 shadow-sm"
                >
                  <Icon
                    size={38}
                    className="text-sky-600"
                  />

                  <h3 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="mx-auto max-w-4xl rounded-3xl bg-sky-600 px-8 py-16 text-center text-white">

          <h2 className="text-4xl font-bold">
            Empieza hoy a cuidar mejor de tu perro
          </h2>

          <p className="mt-6 text-lg text-sky-100">
            Descubre comparativas, consejos y herramientas diseñadas para ayudarte
            en el día a día con tu compañero de cuatro patas.
          </p>

          <Link
            href="/blog"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:scale-105"
          >
            Comenzar ahora
          </Link>

        </div>

      </section>
    </main>
  );
}