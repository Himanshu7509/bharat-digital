import React from 'react';
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

            {data?.goldstory && data.goldstory[0] && (
                <GoldStory data={data.goldstory[0]} />
            )}

            {data?.projectGallery && data.projectGallery.length > 0 && (
                <ProjectGallery data={data.projectGallery} />
            )}

            <ContactNow/>
        </div>
    );
};

export default PortfolioDetailTemplate;