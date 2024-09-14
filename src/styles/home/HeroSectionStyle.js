import styled from 'styled-components';

export const HeroBackground = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL}/home/background_img.jpeg);
  background-size: cover;
  background-position: center;
`;
    

export const HeroSectionWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const Headline = styled.h1`
  font-size: 3rem;
  margin: 0;
  opacity: 0;
  animation: fadeIn 2s forwards;
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
`;

export const Subheadline = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  opacity: 0;
  animation: fadeIn 2s 1s forwards;
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
`;

export const StartShoppingButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;
