import TypeIt from 'typeit-react';
import { useState } from 'react';

import { HeroActivator } from '../heroActivator/heroActivator';

import { HeroOverlay, HeroContainer, HeroBg, TitleContainer, HeroTitle,} from './styled';


export const Hero = () => {
  const [activatorHover, setActivator] = useState(false);

  const onHover = (isHovered) => {
    setActivator(isHovered); 
    console.log(activatorHover)  
  };

  return (
    <HeroOverlay 
      overlay={activatorHover}
    >
        <HeroBg 
          overlay={activatorHover}
        />
        <HeroContainer>
          <HeroActivator
            event={onHover}
          />
        </HeroContainer>
    </HeroOverlay>
  );
};