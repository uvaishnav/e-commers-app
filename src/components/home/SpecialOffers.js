import React from 'react';
import { SpecialOffersWrapper, OfferItem, OfferTitle, OfferDescription } from '../../styles/home/SpecialOffersStyle'

import { offers } from '../common/constants';

const SpecialOffers = () => {
  return (
    <SpecialOffersWrapper>
      <h2>Special Offers</h2>
      {offers.map(offer => (
        <OfferItem key={offer.id}>
          <OfferTitle>{offer.title}</OfferTitle>
          <OfferDescription>{offer.description}</OfferDescription>
        </OfferItem>
      ))}
    </SpecialOffersWrapper>
  );
};

export default SpecialOffers;
