import { mockProperties } from '../data/mock-properties'
import PropertyCard from './property-card'

export default function PropertiesGrid() {
  return (
    <div
      className="
      grid

      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3

      gap-8
      "
    >
      {mockProperties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  )
}