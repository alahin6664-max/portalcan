export function Hero() {
  return (
    <section className="min-h-[calc(100vh-72px)] w-full bg-background">
      <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col items-center justify-center px-8 py-20">

        <h1 className="max-w-5xl text-center text-6xl font-black leading-tight lg:text-8xl">
          Todo tu negocio canino,
          <br />
          en una única plataforma.
        </h1>

        <p className="mt-8 max-w-3xl text-center text-xl text-text-secondary">
          Gestiona clientes, perros, agenda,
          pagos e informes desde cualquier lugar.
        </p>

        <div className="mt-10 flex gap-4">
          {/* botones */}
        </div>

        <div className="mt-20 h-[550px] w-full rounded-3xl border border-border">
          Dashboard
        </div>

      </div>
    </section>
  );
}