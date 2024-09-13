
import styled from 'styled-components';

// Header Container
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

// Branding Section
export const Branding = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 30px;
  }
  
  @media (max-width: 480px) {
    height: 25px;
  }
`;

export const BrandName = styled.h1`
  margin-left: 1rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Login Button
export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;



