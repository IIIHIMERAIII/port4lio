import TypeIt from 'typeit-react';

import { ContextContainer, ContextButton, TypeBox} from "./styled"

export const HelperContext = ({context, btnText}) => {
    return (
        <ContextContainer>
            <TypeBox>
              <TypeIt
                options={{
                  speed: 25,
                  wait: 1500,
                }}
              >
                  {context}
              </TypeIt>
            </TypeBox>
            <ContextButton>
                {btnText}
            </ContextButton>
      </ContextContainer>
    )
}