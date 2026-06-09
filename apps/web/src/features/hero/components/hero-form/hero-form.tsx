import { Mail, Phone, User } from 'lucide-react'
import HeroFormHeader from './hero-form-header'
import HeroFormSelect from './hero-form.select'
import HeroFormInput from './hero-form-input'
import HeroFormButton from './hero-form-button'

export default function HeroForm() {
  return (
    <div
      className="
      relative
      mx-auto
      lg:ml-auto
      mb-10
      md:mb-0

      w-full
      max-w-130

      h-full

      rounded-[28px]

      border
      border-white/10

      bg-[#071A35]/55

      backdrop-blur-2xl

      shadow-[0_25px_80px_rgba(0,0,0,0.45)]

      p-6
      sm:p-8
      lg:p-10
      "
    >
      <HeroFormHeader />

      <div className="mt-8 space-y-4">
        <HeroFormInput
          icon={User}
          placeholder="Nombre y apellido"
        />

        <HeroFormInput
          icon={Mail}
          type="email"
          placeholder="Email"
        />

        <HeroFormInput
          icon={Phone}
          placeholder="Teléfono"
        />

        <HeroFormSelect />

        <HeroFormButton />
      </div>
    </div>
  )
}