import Image from 'next/image'
import { Property } from '../../../../interfaces/property.interface'

type PropertyCardProps = {
  property: Property
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <article
      className="
      overflow-hidden

      rounded-3xl

      border
      border-white/10

      bg-[#071A35]

      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-[#CD9E5C]/40

      cursor-pointer
      "
    >
      <div className="relative h-72">
        <Image
          src={property.firstImage}
          alt={property.title}
          fill
          className="object-cover"
        />

        <div
          className="
          absolute
          inset-0

          bg-linear-to-t
          from-[#071A35]
          via-transparent
          to-transparent
          "
        />
      </div>

      <div className="p-6">
        <span
          className="
          text-xs

          uppercase

          tracking-[3px]

          text-[#CD9E5C]
          "
        >
          {property.location}
        </span>

        <h3
          className="
          mt-3

          text-3xl

          font-bold

          text-white
          "
        >
          {property.title}
        </h3>

        <p
          className="
          mt-4

          text-gray-300

          leading-relaxed
          "
        >
          {property.description}
        </p>
      </div>
    </article>
  )
}