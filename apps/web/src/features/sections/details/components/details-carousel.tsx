'use client'

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import { mockProperties } from '../data/mock-properties'
import DetailsCard from './details-card'

export default function DetailsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 0.5,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ]
  )

  return (
    <div className="absolute mt-6 w-full left-0">
      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className="flex">
          {mockProperties.map((property) => (
            <div
              key={property.id}
              className="
              min-w-0

              flex-[0_0_90%]

              md:flex-[0_0_55%]

              xl:flex-[0_0_30%]

              pl-6
              "
            >
              <DetailsCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}