import React from 'react'
import HeroSection from './portfolioDetailsComponents/HeroSection'
import GoldStory from './portfolioDetailsComponents/GoldStory'
import Header from '@/components/common/header/Header'
import ProjectGallery from './portfolioDetailsComponents/ProjectGallery'
import AllProjects from './portfolioDetailsComponents/AllProjects'
import Footer from '@/components/common/footer/Footer'
import ContactNow from '../aboutus/aboutUsComponents/ContactNow'

const PortfolioDetails = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <GoldStory />
      <ProjectGallery />
      <AllProjects/>
      < ContactNow/>
      <Footer/>
    </div>
  )
}

export default PortfolioDetails