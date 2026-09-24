const products = [
  {
    name: 'Pantalones',
    description: 'Prendas para construir looks modernos y con presencia.',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Camisas',
    description: 'Diseños versátiles para un estilo limpio y actual.',
    image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Conjuntos',
    description: 'Combinaciones completas para destacar sin complicarse.',
    image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=85',
  },
]

export default function Collections() {
  return (
    <section id="coleccion" aria-labelledby="collection-title" className="bg-zinc-950 px-6 py-24">
      <header className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Colección</p>
        <h2 id="collection-title" className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Selección para hombre
        </h2>
      </header>

      <ul className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
        {products.map((product) => (
          <li key={product.name} className="border border-white/10 bg-black">
            <figure>
              <img src={product.image} alt={product.name} className="h-96 w-full object-cover grayscale" />
              <figcaption className="p-6">
                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                <p className="mt-3 leading-7 text-zinc-500">{product.description}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}