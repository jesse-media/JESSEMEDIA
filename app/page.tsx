import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <CTA />
    </main>
  )
}
