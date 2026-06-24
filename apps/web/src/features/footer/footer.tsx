import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Marca */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              MADIBA<span className="text-accent">.</span>
            </h2>
            <p className="text-sm text-gray-300">
              Desarrollos inmobiliarios en zona oeste. Calidad, confianza y
              compromiso en cada proyecto.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Propiedades</li>
              <li>Proyectos</li>
              <li>Nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>

          {/* Zonas */}
          <div>
            <h3 className="font-semibold mb-4">Zonas</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Merlo</li>
              <li>Moreno</li>
              <li>Ituzaingó</li>
              <li>Zona Oeste</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>info@madiba.com</li>
              <li>+54 9 11 1234-5678</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Madiba. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}