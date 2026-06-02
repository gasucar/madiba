import HeroStats from './hero-stats'

export default function HeroContent() {
  return (
    <div className="text-white space-y-6">
      <p className="text-sm tracking-[3px] text-accent">
        REAL ESTATE PREMIUM
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Invertí en tu futuro.
        <br />
        Viví mejor hoy.
      </h1>

      <p className="text-lg text-gray-200 max-w-lg">
        Desarrollos inmobiliarios en zona oeste: Merlo, Moreno y alrededores.
        Calidad, confianza y compromiso en cada proyecto.
      </p>

      <HeroStats />
    </div>
  )
}