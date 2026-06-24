import Container from '@/components/ui/container'
import PropertiesGrid from './properties-grid'
import PropertiesHeader from './properties-header'

export default function PropertiesSection() {
  return (
    <section
      className="relative min-h-screen lg:h-[110vh] w-full bg-[#071A35]"
    >
      <Container>
        <PropertiesHeader />

        <PropertiesGrid />
      </Container>
    </section>
  )
}