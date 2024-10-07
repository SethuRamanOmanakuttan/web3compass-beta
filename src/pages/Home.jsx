// src/pages/Home.js
import React from "react";
import Hero from "../components/Home/Hero";
import EventSection from "../components/Home/StarterPackSection";
import OpenCallSection from "../components/Home/OpenCallSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <EventSection />
      <OpenCallSection />
    </div>
  );
};

export default Home;
