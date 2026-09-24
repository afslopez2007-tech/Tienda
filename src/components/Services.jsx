const services = [
  ['Asesoría de estilo', 'Te ayudamos a encontrar combinaciones que vayan con tu estilo.'],
  ['Selección de prendas', 'Encuentra opciones para crear looks completos y actuales.'],
  ['Atención personalizada', 'Recibe orientación para elegir tus prendas de forma sencilla.'],
]

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="bg-black px-6 py-24">
      <header className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Servicios</p>
        <h2 id="services-title" className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Más que ropa
        </h2>
      </header>

      <ol className="mx-auto mt-12 grid max-w-7xl gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
        {services.map(([title, description], index) => (
          <li key={title} className="bg-black p-8">
            <span className="text-sm font-bold text-zinc-600">0{index + 1}</span>
            <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-zinc-500">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}