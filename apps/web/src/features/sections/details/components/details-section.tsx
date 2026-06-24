import Container from '@/components/ui/container'
import DetailsHeader from './details-header'
import DetailsCarousel from './details-carousel'

export default function DetailsSection() {
  return (
    <section
      className="relative min-h-screen lg:h-[110vh] w-full bg-[#0a2347]"
    >
      <Container>
        <DetailsHeader />

        <DetailsCarousel />
      </Container>
    </section>
  )
}