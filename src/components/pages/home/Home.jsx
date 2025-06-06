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
import OurLatestArticle from './homeComponents/OurLatestArticle'
import FreeTrail from './homeComponents/FreeTrail'
import GetInTouch from './homeComponents/GetInTouch'
import Footer from '@/components/common/footer/Footer'

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
    <OurLatestArticle/>
    <FreeTrail/>
    <GetInTouch/>
    <Footer/>
    </>
  )
}

export default Home