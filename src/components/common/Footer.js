import React from 'react';
import { FooterWrapper, FooterLink, SocialMediaIcons } from '../../styles/Footer.style';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <FooterLink href="#about">About Us</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </div>
      <SocialMediaIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </SocialMediaIcons>
    </FooterWrapper>
  );
};

export default Footer;
