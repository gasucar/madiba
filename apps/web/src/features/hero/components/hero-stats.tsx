import { Building2, Home, Ruler } from 'lucide-react'
import HeroStatNumber from './hero-stat-number'

export default function HeroStats() {
  const stats = [
    {
      icon: <Building2 size={28} color="#CD9E5C" />,
      value: 24,
      label: 'Edificios',
      description: ['entregados en', 'zona oeste'],
    },
    {
      icon: <Home size={28} color="#CD9E5C" />,
      value: 1791,
      label: 'Departamentos',
      description: ['entregados'],
    },
    {
      icon: <Ruler size={28} color="#CD9E5C" />,
      value: 122,
      suffix: 'k',
      label: 'M² construidos',
      description: ['con altos', 'estándares'],
    },
  ]

  return (
    <div className="flex flex-wrap gap-8 pt-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative flex items-start gap-6 pr-8"
        >
          {/* Separador */}
          {index !== stats.length - 1 && (
            <div className="absolute right-0 top-24 h-28 w-px bg-white/15" />
          )}

          <div>
            {/* Icono */}
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-blue-900/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
              {stat.icon}
            </div>

            {/* Número */}
            <p className="text-5xl font-bold text-white">
              <HeroStatNumber
                end={stat.value}
                suffix={stat.suffix}
                separator="."
              />
            </p>

            {/* Label */}
            <p className="mt-2 text-sm font-semibold text-shadow-black text-shadow-[1px_0.5px_1px] uppercase tracking-[2px] text-[#CD9E5C]">
              {stat.label}
            </p>

            {/* Descripción */}
            <div className="mt-3 space-y-1">
              {stat.description.map((line, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-300"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}