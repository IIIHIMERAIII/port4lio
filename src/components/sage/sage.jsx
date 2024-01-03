import { SageContainer, SageBg} from "./style"

import helper2 from  '../../images/helper2.png';
import helper1 from '../../images/helper.png';

import { Helper } from "../helper/helper";

export const Sage = () => {
    return (
        <SageContainer>
            <SageBg>
                <Helper
                    helper={helper1}
                    side='right'
                    name='Keyle \PinkQueen\'
                    btnText='More pussies'
                />
                <Helper
                    helper={helper2}
                    side='left'
                    name='Wallority \SolarDaughter\'
                    btnText='Apply'
                />
            </SageBg>
        </SageContainer>
    )
}