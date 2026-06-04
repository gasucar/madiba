import HeroStats from './hero-stats'

export default function HeroContent() {
  return (
    <div className="relative max-w-3xl text-white">
      {/* Tag */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-[#CD9E5C] text-sm tracking-[5px] uppercase font-semibold text-shadow-black text-shadow-[1px_0.5px_1px]">
          Real Estate Premium
        </span>

        <div className="h-px w-28 bg-[#CD9E5C]/60" />
      </div>

      {/* Título */}
      <h1
        className="
        text-4xl
        md:text-5xl
        xl:text-6xl
        font-bold
        leading-[0.95]
        tracking-[-1px]
        "
      >
        Invertí en tu futuro.
        <br />
        Viví mejor hoy.
      </h1>

      {/* Descripción */}
      <p
        className="
        mt-8
        max-w-xl
        text-xl
        leading-relaxed
        text-gray-200
        "
      >
        Desarrollos inmobiliarios en zona oeste: Merlo, Moreno y alrededores.
        Calidad, confianza y compromiso en cada proyecto.
      </p>

      <HeroStats />
    </div>
  )
}