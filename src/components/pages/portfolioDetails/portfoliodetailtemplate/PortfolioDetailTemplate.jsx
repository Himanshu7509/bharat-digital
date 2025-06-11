import React from 'react';
import ProjectCarouselDataProvider from '../portfolioDetailsComponents/ProjectCarouselDataProvider';
// Import your other components
import HeroSection from '../portfolioDetailsComponents/HeroSection';
import GoldStory from '../portfolioDetailsComponents/GoldStory';
import ProjectGallery from '../portfolioDetailsComponents/ProjectGallery';
import ContactNow from '../../../common/freeTrialBanner/FreeTrail';

const PortfolioDetailTemplate = ({ data }) => {
    console.log('Template data:', data);
    console.log('Has goldstory?', !!data?.goldstory);
    return (
        <div className="w-full">
            <HeroSection data={data} />


            {/* Render GoldStory if goldstory data exists */}
            {data?.goldstory && data.goldstory[0] && (
                <GoldStory data={data.goldstory[0]} />
            )}

            
            {/* Render Project Gallery if available */}
            {data?.projectGallery && data.projectGallery.length > 0 && (
                <ProjectGallery data={data.projectGallery} />
            )}


            {/* <ProjectGallery />  */}
            <ProjectCarouselDataProvider slides={data?.slides || []} />
            {/* <ContactNow /> */}
            <ContactNow/>
        </div>
    );
};

export default PortfolioDetailTemplate;