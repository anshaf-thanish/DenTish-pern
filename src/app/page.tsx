import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <Hero/>
      <HowItWorks/>
    </div>

  )
}

export default page

