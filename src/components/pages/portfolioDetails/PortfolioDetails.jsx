import React from 'react'
import HeroSection from './portfolioDetailsComponents/HeroSection'
import GoldStory from './portfolioDetailsComponents/GoldStory'
import ProjectGallery from './portfolioDetailsComponents/ProjectGallery'
import AllProjects from './portfolioDetailsComponents/AllProjects'
import ContactNow from '../aboutus/aboutUsComponents/ContactNow'

const PortfolioDetails = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <GoldStory />
      <ProjectGallery />
      <AllProjects/>
      < ContactNow/>
    </div>
  )
}

export default PortfolioDetails