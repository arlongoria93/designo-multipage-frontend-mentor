import React from "react";
import Navbar from "./Navbar/navbar";
import Hero from "./Hero/Hero";
import HomeContent from "./HomeContent/HomeContent";

const MobileLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeContent />
    </>
  );
};

export default MobileLayout;
