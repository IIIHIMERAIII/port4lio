import { useState } from 'react';

import { HelperContainer, HelperImg, SageNameContainer, SageName  } from './styled';

import helper from '../../images/helper.png';

export const Helper = () => {
    const [helperStatus, setHelperStatus] = useState(false);
  
    const onClick = () => {
      setHelperStatus(true);
    };
  
    return (
      <HelperContainer onClick={onClick} animateText={helperStatus}>
        <HelperImg src={helper} />
        <SageNameContainer>
          <SageName  animateText={helperStatus}>
            Keyle \BluePrincess\
          </SageName >
        </SageNameContainer>
      </HelperContainer>
    );
  };