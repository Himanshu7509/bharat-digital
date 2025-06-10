
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
import FreeTrail from '../../common/freeTrialBanner/FreeTrail'
import GetInTouch from './homeComponents/GetInTouch'

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home