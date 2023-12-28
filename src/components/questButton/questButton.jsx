import { Button, Svg } from "./styled";

import sprite from '../../images/sprite.svg';

export const QuestButton = ({eventEnter, eventLeave, eventClick}) => {
    return (
      <Button 
        onMouseEnter={eventEnter}
        onMouseLeave={eventLeave}
        onClick={eventClick}
      >
          <Svg>
          <use xlinkHref={`${sprite}#arrow`} />
        </Svg>
      </Button>
    );
};