export default function About() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="bg-black px-6 py-24">
      <article className="mx-auto max-w-4xl">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Sobre nosotros</p>
          <h2 id="about-title" className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Estilo que habla por ti.
          </h2>
        </header>
        <p className="mt-8 text-lg leading-8 text-zinc-400">
          SH STORE es una tienda de ropa masculina enfocada en moda de alto estilo. Nuestra propuesta combina prendas modernas, presencia y una estética inspirada en el mundo de la moda premium.
        </p>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Trabajamos una selección pensada para quienes quieren vestir diferente y mantener un look fresco, actual y con personalidad.
        </p>
      </article>
    </section>
  )
}