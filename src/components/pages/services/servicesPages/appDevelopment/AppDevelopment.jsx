import Footer from '@/components/common/footer/Footer'
import Header from '@/components/common/header/Header'
import React from 'react'
import AppHeroSec from './appComponent/AppHeroSec'
import OurValues from '../commonComponents/ourValues/OurValues'
import WebApproach from '../webDevelopment/webComponents/WebApproach'
import OurTech from '../commonComponents/ourTech/OurTech'
import FreeTrail from '@/components/common/freeTrialBanner/FreeTrail'

const AppDevelopment = () => {
  return (
    <div>
      <Header/>
      <AppHeroSec/>
      <OurValues/>
      <WebApproach/>
      <OurTech/>
      <FreeTrail/>
      <Footer/>
    </div>
  )
}

export default AppDevelopment