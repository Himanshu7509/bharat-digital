import React from 'react'
import HeroSection from './portfolioDetailsComponents/HeroSection'
import GoldStory from './portfolioDetailsComponents/GoldStory'
import Header from '@/components/common/header/Header'
import ProjectGallery from './portfolioDetailsComponents/ProjectGallery'
import AllProjects from './portfolioDetailsComponents/AllProjects'

const PortfolioDetails = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <GoldStory />
      <ProjectGallery />
      <AllProjects/>
    </div>
  )
}

export default PortfolioDetails