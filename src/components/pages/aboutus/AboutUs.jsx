import React from "react";
import AboutHero from "./aboutUsComponents/AboutHero";
import PartnerLogos from "./aboutUsComponents/PartnerLogos";
import VisionMission from "./aboutUsComponents/VisionMisson";
import AchievementsPage from "./aboutUsComponents/AchievementsPage";
import TimeLineComponent from "./aboutUsComponents/TimeLineComponent";
import WhoWeAre from "../home/homeComponents/WhoWeAre";
import OurQuestion from "../home/homeComponents/OurQuestion";
import FreeTrail from "@/components/common/freeTrialBanner/FreeTrail";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <PartnerLogos />
      <WhoWeAre />
      <VisionMission />
      <AchievementsPage />
      <TimeLineComponent />
      <OurQuestion />
      <FreeTrail />
    </div>
  );
};

export default AboutUs;
