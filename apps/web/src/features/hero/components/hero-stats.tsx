import { Building2, Home, Ruler } from 'lucide-react'
import HeroStatNumber from './hero-stat-number'
import { motion } from 'framer-motion'

export default function HeroStats() {
  const stats = [
    {
      icon: <Building2 size={24} color="#CD9E5C" />,
      value: 20,
      label: 'Edificios',
      prefix: '+',
    },
    {
      icon: <Home size={24} color="#CD9E5C" />,
      value: 1791,
      label: 'Departamentos',
    },
    {
      icon: <Ruler size={24} color="#CD9E5C" />,
      value: 122,
      suffix: 'k',
      label: 'M² Construidos',
    },
  ]

  return (
    <div
      className="
      mt-10

      grid
      grid-cols-3

      gap-3
      md:gap-6
      lg:gap-12

      w-full
      "
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: stats.findIndex(
              (s) => s.label === stat.label
            ) * 0.15,
            ease: 'easeOut',
          }}
          className="
            flex
            flex-col
                  
            items-center
            "
        >

          {/* Icono */}
          <div
            className="
            mb-4

            flex
            h-12
            w-12

            md:h-14
            md:w-14

            lg:h-16
            lg:w-16

            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-blue-900/20

            backdrop-blur-xl

            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            {stat.icon}
          </div>

          {/* Número */}
          <p
            className="
            text-2xl
            md:text-3xl
            lg:text-4xl

            font-bold
            text-white

            text-center
            "
          >
            <HeroStatNumber
              end={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              separator="."
            />
          </p>

          {/* Label */}
          <p
            className="
            mt-2

            text-[12px]
            md:text-sm
            lg:text-lg

            font-bold
            md:font-semibold

            uppercase


            text-[#CD9E5C]

            text-center
            "
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}