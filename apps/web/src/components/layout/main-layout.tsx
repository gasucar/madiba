import Navbar from '../../features/navbar/navbar'
import Footer from '../../features/footer/footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}