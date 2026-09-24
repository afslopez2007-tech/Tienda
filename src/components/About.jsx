export default function About() {
  return (
    <section id="sobre-mi" aria-labelledby="about-title" className="bg-zinc-950 px-6 py-24">
      <article className="mx-auto max-w-4xl">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Sobre mí</p>
          <h2 id="about-title" className="mt-3 text-4xl font-black text-white md:text-5xl">Construyendo y aprendiendo.</h2>
        </header>
        <p className="mt-8 text-lg leading-8 text-zinc-400">Soy Andrés Samboni, estudiante de desarrollo de software. Me interesa la programación, el desarrollo web, las bases de datos y la creación de aplicaciones útiles para las personas.</p>
        <p className="mt-5 text-lg leading-8 text-zinc-400">He trabajado en proyectos académicos y personales usando HTML, CSS, JavaScript, React, Python, SQL, Git y GitHub, además de conceptos de bases de datos y Scrum.</p>
      </article>
    </section>
  )
}