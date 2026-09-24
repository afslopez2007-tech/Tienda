export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="border-b border-white/10 bg-zinc-950">
      <article className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <header>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400">
            Moda masculina
          </p>
          <h1 id="hero-title" className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl">
            Lo más fresa,
            <br />
            <span className="text-zinc-500">a tu estilo.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            SH STORE presenta ropa de moda para hombre inspirada en el estilo de las grandes casas de moda.
          </p>
          <p className="mt-8">
            <a href="#coleccion" className="inline-block border border-white bg-white px-7 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-zinc-200">
              Ver colección
            </a>
          </p>
        </header>

        <figure className="relative overflow-hidden border border-white/10 bg-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85"
            alt="Hombre usando ropa de estilo urbano y elegante"
            className="h-[520px] w-full object-cover grayscale"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-black/75 p-5 text-sm uppercase tracking-[0.2em] text-white">
            SH STORE — MEN
          </figcaption>
        </figure>
      </article>
    </section>
  )
}