'use client'

import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/container'
import { useState } from 'react'

const links = [
  'Propiedades',
  'Nosotros',
  'Contacto',
]

export default function Navbar() {

  const [open, setOpen] = useState(false)

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
        <div className="flex items-center justify-between py-6">

          {/* Logo SIEMPRE visible */}
          <div className="select-none">
            <h1
              className="
              text-3xl
              lg:text-4xl
              font-light
              tracking-[2px]
              text-white
              "
            >
              MADIBA
              <span className="ml-1 text-[#CD9E5C]">.</span>
            </h1>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-16">
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
            text-shadow-black
            text-shadow-[1px_0.5px_1px]
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

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="
            lg:hidden
            text-white
            "
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </Container>
      {
        open && (
          <div
            className="
            lg:hidden

            rounded-2xl

            border
            border-white/10

            bg-[#071A35]/95

            backdrop-blur-xl

            p-6
            "
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white text-lg"
                >
                  {link}
                </a>
              ))}

              <button
                className="
                h-12
                rounded-xl
                bg-[#CD9E5C]
                text-[#071A35]
                font-semibold
                "
              >
                Comenzar
              </button>
            </div>
          </div>
        )
      }
    </nav>
  )
}