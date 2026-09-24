export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="border-t border-white/10 bg-zinc-950 px-6 py-24">
      <article className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Contacto</p>
          <h2 id="contact-title" className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
            Hablemos de tu próximo look.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Escríbenos para consultar disponibilidad, prendas y atención personalizada.
          </p>
        </header>

        <address className="mt-10 not-italic">
          <a href="mailto:contacto@shstore.com" className="text-lg font-semibold text-white underline decoration-zinc-700 underline-offset-8 transition hover:decoration-white">
            contacto@shstore.com
          </a>
        </address>
      </article>
    </section>
  )
}