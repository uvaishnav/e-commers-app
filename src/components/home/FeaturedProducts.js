import React from 'react';
import { FeaturedProductsWrapper, ProductGrid, ProductCard, ProductImage, ProductTitle, ProductDescription } from '../../styles/home/FeaturedProductsStyle';
import { sampleProducts } from '../common/constants';

const FeaturedProducts = () => {
    return (
      <FeaturedProductsWrapper>
        <h2>Featured Products</h2>
        <ProductGrid>
          {sampleProducts.map(product => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductCard>
          ))}
        </ProductGrid>
      </FeaturedProductsWrapper>
    );
  };
  
  export default FeaturedProducts;