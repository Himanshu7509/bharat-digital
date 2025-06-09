import Footer from '@/components/common/footer/Footer'
import Header from '@/components/common/header/Header'
import React from 'react'
import WebHeroSec from './webComponents/WebHeroSec'
import OurValues from '../commonComponents/ourValues/OurValues'
import OurProcess from '../commonComponents/ourProcess/OurProcess'
import WebApproach from './webComponents/WebApproach'
import OurTech from '../commonComponents/ourTech/OurTech'
import FreeTrail from '@/components/common/freeTrialBanner/FreeTrail'

const WebDevelopment = () => {
  return (
    <div>
      <Header/>
      <WebHeroSec/>
      <OurValues/>
      <OurProcess/>
      <WebApproach/>
      <OurTech/>
      <FreeTrail/>
      <Footer/>
    </div>
  )
}

export default WebDevelopment