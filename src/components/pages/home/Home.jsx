import Header from '@/components/common/header/Header'
import React from 'react'
import Herosec from './homeComponents/Herosec'
import WhoWeAre from './homeComponents/WhoWeAre'
import MarqueeBanner from './homeComponents/MarqueeBanner'
import WhyChooseUs from './homeComponents/WhyChooseUs'
import OurServices from './homeComponents/OurServices'
import OurQuestion from './homeComponents/OurQuestion'

const Home = () => {
  return (
    <>
    <Header/>
    <Herosec/>
    <WhoWeAre/>
    <MarqueeBanner/>
    <WhyChooseUs/>
    <OurServices/>
    <OurQuestion/>
    </>
  )
}

export default Home