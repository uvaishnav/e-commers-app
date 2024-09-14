import React from "react";

import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import SpecialOffers from "../components/home/SpecialOffers";
import BrandStory from "../components/home/BrandStory";

import Footer from "../components/common/Footer"


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <SpecialOffers />
      <BrandStory />
      <Footer />
    </div>
  );
}

export default HomePage;