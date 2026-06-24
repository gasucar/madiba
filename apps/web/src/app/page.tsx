import MainLayout from '@/components/layout/main-layout'
import HeroSection from '@/features/hero/components/hero-section'
import PropertiesSection from '@/features/sections/properties/components/properties-section'

export default function Home() {
  return (
    <MainLayout>
        <HeroSection />
        <PropertiesSection />
    </MainLayout>
  )
}