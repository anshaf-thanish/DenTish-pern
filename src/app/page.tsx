import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import PricingSection from '@/components/landing/PricingSection'
import WhatToAsk from '@/components/landing/WhatToAsk'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <Hero/>
      <HowItWorks/>
      <WhatToAsk/>
      <PricingSection/>
    </div>

  )
}

export default page

