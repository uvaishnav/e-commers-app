import React from 'react';
import { useNavigate } from 'react-router-dom';
import {HeroBackground, HeroSectionWrapper, Headline, Subheadline, StartShoppingButton } from '../../styles/home/HeroSectionStyle';

const HeroSection = () => {
    const navigate = useNavigate();

    const startShopping = () => {
        navigate('/login');
    };
    return (
        <HeroBackground >
      <HeroSectionWrapper>
        <Headline>Discover the Best Deals on Your Favorite Products</Headline>
        <Subheadline>Shop now and enjoy exclusive discounts.</Subheadline>
        <StartShoppingButton onClick={startShopping}>Start Shopping</StartShoppingButton>
      </HeroSectionWrapper>
      </HeroBackground>
    );
  };
  
  export default HeroSection;