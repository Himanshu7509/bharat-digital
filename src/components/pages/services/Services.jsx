import Header from '@/components/common/header/Header'
import React from 'react'
import HeroSecServices from './servicesComponents/HeroSecServices'
import FreeTrail from '@/components/common/freeTrialBanner/FreeTrail'
import ServicesCard from './servicesComponents/ServicesCard'
import Footer from '@/components/common/footer/Footer'

const Services = () => {
  return (
    <div>
      <HeroSecServices/>
      <ServicesCard/>
      <FreeTrail/>
    </div>
  )
}

export default Services