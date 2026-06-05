'use client'

import { useEffect, useState } from 'react'

import Container from '@/components/ui/container'

const links = [
  'Propiedades',
  'Nosotros',
  'Contacto',
]

export default function Navbar() {

  return (
    <nav
      className={`
        absolute
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        'bg-transparent'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between py-8">
          <div className="select-none">
            <h1
              className="
        text-4xl
        font-light
        tracking-[2px]
        text-white
        "
            >
              MADIBA
              <span className="ml-1 text-[#CD9E5C]">.</span>
            </h1>
          </div>

          <div className="flex items-center gap-16">
            <div className="flex items-center gap-14">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="
          text-white/90
          text-lg
          transition-all
          duration-300
          font-bold
        text-shadow-black text-shadow-[1px_0.5px_1px]
          hover:text-[#CD9E5C]
          "
                >
                  {link}
                </a>
              ))}
            </div>
            <button
              className="
      h-12

      px-10

      rounded-xl

      bg-[#CD9E5C]

      text-[#071A35]

      font-semibold

      transition-all
      duration-300
      cursor-pointer
      hover:brightness-110
      hover:scale-105
      "
            >
              Comenzar
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}