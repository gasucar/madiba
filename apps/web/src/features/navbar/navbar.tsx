'use client'

import Container from "@/components/ui/container"

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <Container>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <h1 className="text-white text-xl font-semibold tracking-wide">
            MADIBA<span className="text-accent">.</span>
          </h1>

          {/* Links */}
          <div className="flex items-center gap-8 text-white">
            <a href="#" className="hover:text-accent transition">
              Propiedades
            </a>
            <a href="#" className="hover:text-accent transition">
              Nosotros
            </a>
            <a href="#" className="hover:text-accent transition">
              Contacto
            </a>

            <button className="bg-accent text-primary px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
              Comenzar
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}