import React from "react";
import Hero from "@/components/landing/Hero";
import Network from "@/components/landing/Network";
import GlobalMission from "@/components/landing/GlobalMission";
import Explainer from "@/components/landing/Explainer";
import AreYouBalanced from "@/components/landing/AreYouBalanced";
import SkillfulLiving from "@/components/landing/SkillfulLiving";
import RelaxRenew from "@/components/landing/RelaxRenew";
import SetGoals from "@/components/landing/SetGoals";
import StayMotivated from "@/components/landing/StayMotivated";
import SleepEscape from "@/components/landing/SleepEscape";
import AboutDevelopers from "@/components/landing/AboutDevelopers";
import Review from "@/components/landing/Review";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Network />
      <GlobalMission />
      <Explainer />
      <AreYouBalanced />
      <SkillfulLiving />
      <RelaxRenew />
      <SetGoals />
      <StayMotivated />
      <SleepEscape />
      <AboutDevelopers />
      <Review />
      <Footer />
    </div>
  );
};

export default Landing;
