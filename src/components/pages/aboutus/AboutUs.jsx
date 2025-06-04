import React from 'react'
import AboutHero from './aboutUsComponents/AboutHero'
import PartnerLogos from './aboutUsComponents/PartnerLogos'
import VisionMission from './aboutUsComponents/VisionMisson'
import Header from '@/components/common/header/Header'
import AchievementsPage from './aboutUsComponents/AchievementsPage'
import TimeLineComponent from './aboutUsComponents/TimeLineComponent'
import ContactNow from './aboutUsComponents/ContactNow'
import Footer from '@/components/common/footer/Footer'
import WhoWeAre from '../home/homeComponents/WhoWeAre'
import OurQuestion from '../home/homeComponents/OurQuestion'


const AboutUs = () => {
  return (
    <div>
      <Header/>
<AboutHero/>
<PartnerLogos/>
<WhoWeAre/>
<VisionMission/>
<AchievementsPage/>
<TimeLineComponent/>
<OurQuestion/>
<ContactNow/>
<Footer/>

    </div>
  )
}

export default AboutUs