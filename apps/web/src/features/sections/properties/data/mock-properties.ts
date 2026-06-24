import { Property } from '../../../../interfaces/property.interface'

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Madiba I',
    location: 'Merlo',
    description:
      'Departamentos modernos diseñados para quienes buscan calidad y ubicación.',
    firstImage: '/department.jpeg',
    images: [],
    builded: true,
    floors: 8,
    units: 42,
  },
  {
    id: '2',
    title: 'Madiba II',
    location: 'Moreno',
    description:
      'Proyecto residencial premium con excelentes terminaciones.',
    firstImage: '/department.jpeg',
    images: [],
    builded: false,
    floors: 10,
    units: 56,
  },
  {
    id: '3',
    title: 'Madiba III',
    location: 'Merlo',
    description:
      'Una propuesta moderna para vivir o invertir en zona oeste.',
    firstImage: '/department.jpeg',
    images: [],
    builded: false,
    floors: 12,
    units: 70,
  },
]