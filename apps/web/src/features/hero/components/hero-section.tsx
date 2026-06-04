'use client'

import Image from 'next/image'
import HeroContent from './hero-content'
import HeroForm from './hero-form'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/banner.jpeg"
          alt="Madiba"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        
        {/* Overlay azul */}
        <div
        className="
        absolute
        inset-0
        bg-linear-to-r
        from-[#071A35]/90
        via-[#071A35]/75
        to-[#071A35]/60
        "
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <HeroContent />
          <HeroForm />
        </div>
      </div>
    </section>
  )
}