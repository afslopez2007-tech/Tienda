export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#inicio" className="text-xl font-black tracking-[0.25em] text-white">
          SH STORE
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
          <li><a className="transition hover:text-white" href="#inicio">Inicio</a></li>
          <li><a className="transition hover:text-white" href="#nosotros">Nosotros</a></li>
          <li><a className="transition hover:text-white" href="#coleccion">Colección</a></li>
          <li><a className="transition hover:text-white" href="#servicios">Servicios</a></li>
          <li><a className="transition hover:text-white" href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}