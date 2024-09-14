import styled from 'styled-components';

export const FeaturedProductsWrapper = styled.section`
  padding: 40px;
  background-color: #fff;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const ProductCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 8px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  color: #666;
`;
