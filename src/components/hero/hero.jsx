import TypeIt from 'typeit-react';

import { HeroOverlay, HeroContainer, HeroBg, HeroTitle } from './styled';

export const Hero = () => {
  return (
    <HeroOverlay>
        <HeroBg/>
        <HeroContainer>
          <HeroTitle>Hi Dudes</HeroTitle>
        </HeroContainer>
    </HeroOverlay>
  );
};