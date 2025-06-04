import Header from '@/components/common/header/Header'
import React from 'react'
import Herosec from './homeComponents/Herosec'
import WhoWeAre from './homeComponents/WhoWeAre'
import MarqueeBanner from './homeComponents/MarqueeBanner'
import WhyChooseUs from './homeComponents/WhyChooseUs'
import OurServices from './homeComponents/OurServices'
import OurQuestion from './homeComponents/OurQuestion'
import PartnerLogos from '../aboutus/aboutUsComponents/PartnerLogos'
import OurClient from './homeComponents/OurClient'

const Home = () => {
  return (
    <>
    <Header/>
    <Herosec/>
    <WhoWeAre/>
    <MarqueeBanner/>
    <WhyChooseUs/>
    <OurServices/>
    <PartnerLogos/>
    <OurQuestion/>
    <OurClient/>  
    </>
  )
}

export default Home