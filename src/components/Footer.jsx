export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8">
      <p className="mx-auto max-w-7xl text-sm text-zinc-600">
        © {new Date().getFullYear()} SH STORE. Moda masculina.
      </p>
    </footer>
  )
}