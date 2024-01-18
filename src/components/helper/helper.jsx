import { HelperContainer, HelperImg} from './styled';

import { HelperContext } from '../helperContext/helperContext';


export const Helper = ({props}) => {


    const prop = {
      ...props,
      ...props.scenario
    }



    return (
      <HelperContainer >
          <HelperImg src={prop.avatar} />
        <HelperContext
            props={prop}
        />
      </HelperContainer>
    );
  };