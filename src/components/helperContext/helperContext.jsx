import TypeIt from 'typeit-react';

import { ContextContainer, ContextButton} from "./styled"

export const HelperContext = ({context, btnText}) => {
    return (
        <ContextContainer>
            <TypeIt
              options={{
                speed: 25,
                wait: 1500,
              }}
            >
                {context}
            </TypeIt>
            <ContextButton>
                {btnText}
            </ContextButton>
      </ContextContainer>
    )
}