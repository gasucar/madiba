import { ChevronDown, MapPin } from 'lucide-react'

export default function HeroFormSelect() {
  return (
    <div
      className="
      flex
      items-center

      h-14

      rounded-xl

      border
      border-white/10

      bg-[#0B2346]/70

      px-5
      "
    >
      <MapPin
        size={20}
        strokeWidth={1.8}
        className="text-gray-400"
      />

      <span className="ml-4 flex-1 text-gray-400">
        Zona de interés
      </span>

      <ChevronDown
        size={18}
        className="text-gray-400"
      />
    </div>
  )
}