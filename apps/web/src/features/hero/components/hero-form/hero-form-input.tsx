import { LucideIcon } from 'lucide-react'

type HeroFormInputProps = {
  icon: LucideIcon
  placeholder: string
  type?: string
}

export default function HeroFormInput({
  icon: Icon,
  placeholder,
  type = 'text',
}: HeroFormInputProps) {
  return (
    <div
      className="
      flex
      items-center
      gap-4

      h-14

      rounded-xl

      border
      border-white/10

      bg-[#0B2346]/70

      px-5

      transition-all
      duration-300

      hover:border-white/20
      "
    >
      <Icon
        size={20}
        strokeWidth={1.8}
        className="text-gray-400"
      />

      <input
        type={type}
        placeholder={placeholder}
        className="
        w-full
        bg-transparent
        text-white
        outline-none

        placeholder:text-gray-400
        "
      />
    </div>
  )
}