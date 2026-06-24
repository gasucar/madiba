import Image from 'next/image'
import { Property } from '../../../../interfaces/property.interface'

type DetailsCardProps = {
  property: Property
}

export default function DetailsCard({
  property,
}: DetailsCardProps) {
  return (
    <article
      className="
      overflow-hidden

      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-[#CD9E5C]/40

      cursor-pointer
      "
    >
      <div className="relative h-96">
        <Image
          src={property.firstImage}
          alt={property.title}
          fill
        />
      </div>

      <div className="p-2">
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

        {/* <h3
          className="

          text-3xl

          font-bold

          text-white
          "
        >
          {property.title}
        </h3> */}
      </div>
    </article>
  )
}