export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="border-t border-white/10 bg-black px-6 py-24">
      <article className="mx-auto max-w-6xl">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Contacto</p>
          <h2 id="contact-title" className="mt-3 text-4xl font-black text-white md:text-6xl">Hablemos.</h2>
        </header>
        <address className="mt-10 grid gap-5 not-italic sm:grid-cols-2">
          <a href="tel:+573177130330" className="border border-white/10 p-6 text-lg font-semibold text-white hover:border-white">317 713 0330</a>
          <p className="border border-white/10 p-6 text-zinc-400">Popayán, Cauca, Colombia</p>
        </address>
      </article>
    </section>
  )
}