import React from 'react'
import AboutHero from './aboutUsComponents/AboutHero'
import PartnerLogos from './aboutUsComponents/PartnerLogos'
import VisionMission from './aboutUsComponents/VisionMisson'
import AchievementsPage from './aboutUsComponents/AchievementsPage'
import TimeLineComponent from './aboutUsComponents/TimeLineComponent'
import ContactNow from './aboutUsComponents/ContactNow'
import WhoWeAre from '../home/homeComponents/WhoWeAre'
import OurQuestion from '../home/homeComponents/OurQuestion'


const AboutUs = () => {
  return (
    <div>
     
<AboutHero/>
<PartnerLogos/>
<WhoWeAre/>
<VisionMission/>
<AchievementsPage/>
<TimeLineComponent/>
<OurQuestion/>
<ContactNow/>


    </div>
  )
}

export default AboutUs