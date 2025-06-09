import Footer from '@/components/common/footer/Footer'
import Header from '@/components/common/header/Header'
import React from 'react'
import WebHeroSec from './webComponents/WebHeroSec'
import OurValues from '../commonComponents/ourValues/OurValues'
import OurProcess from '../commonComponents/ourProcess/OurProcess'
import WebApproach from './webComponents/WebApproach'
import OurTech from '../commonComponents/ourTech/OurTech'

const WebDevelopment = () => {
  return (
    <div>
      <Header/>
      <WebHeroSec/>
      <OurValues/>
      <OurProcess/>
      <WebApproach/>
      <OurTech/>
      <Footer/>
    </div>
  )
}

export default WebDevelopment