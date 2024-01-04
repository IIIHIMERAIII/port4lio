import { useState } from 'react';

import { HelperContainer, CharacterContainer, HelperImg, SageNameContainer, SageName } from './styled';

import { HelperContext } from '../helperContext/helperContext';


export const Helper = ({helper, side, name, btnText}) => {
    const [helperStatus, setHelperStatus] = useState(false);
  
    const onClick = () => {
      setHelperStatus(true);
    };
  
    return (
      <HelperContainer onClick={onClick} >
        {side === 'left' && (
        <HelperContext
            context='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sunt repellendus ut dicta quae blanditiis eius modi! At corporis molestiae veniam omnis iste perferendis illo vero consequatur repellat aperiam alias doloremque laboriosam optio assumenda laborum dolorum voluptatibus neque tenetur quos, cumque rerum voluptas ipsa rem! Distinctio excepturi iusto molestias nemo alias temporibus rem illo dignissimos dicta, neque debitis fugit provident?'
            btnText={btnText}
        />
        )}
        <CharacterContainer>
          <HelperImg src={helper} />
          <SageNameContainer status={helperStatus}>
            <SageName  status={helperStatus}>
                  {name}
            </SageName >
          </SageNameContainer>
        </CharacterContainer>
        {side === 'right' && (
        <HelperContext
            context='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sunt repellendus ut dicta quae blanditiis eius modi! At corporis molestiae veniam omnis iste perferendis illo vero consequatur repellat aperiam alias doloremque laboriosam optio assumenda laborum dolorum voluptatibus neque tenetur quos, cumque rerum voluptas ipsa rem! Distinctio excepturi iusto molestias nemo alias temporibus rem illo dignissimos dicta, neque debitis fugit provident?'
            btnText={btnText}
        />
        )}
      </HelperContainer>
    );
  };