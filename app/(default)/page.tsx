export const metadata = {
  title: 'AnswersAi',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Statistics from '@/components/statistics'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
