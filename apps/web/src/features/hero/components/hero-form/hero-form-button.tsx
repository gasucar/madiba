'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroFormButton() {
  return (
    <motion.button
      type="button"
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
      mt-4

      flex
      items-center
      justify-center
      gap-2

      h-12
      w-full

      rounded-xl

      bg-[#CD9E5C]

      font-semibold
      text-lg

      text-[#071A35]

      shadow-[0_10px_40px_rgba(205,158,92,0.25)]

      transition-all
      duration-200

      cursor-pointer
      "
    >
      <span>Enviar consulta</span>

      <ArrowRight
        size={20}
        strokeWidth={2}
      />
    </motion.button>
  )
}