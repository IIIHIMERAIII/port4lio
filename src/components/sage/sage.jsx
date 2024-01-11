import { SageContainer, SageBg, HelperContainer, LinksContainer} from "./style"

import helper2 from  '../../images/helper2.png';
import helper1 from '../../images/helper.png';

import { Helper } from "../helper/helper";
import { SocialLink } from "../socialLink/socialLink";


const  items = [
    {
        icon: 'github',
    },
    {
        icon: 'linkedin',
    },
    {
        icon: 'steam',
    }
]

export const Sage = () => {
    return (
        <SageContainer>
            <SageBg>
                <HelperContainer>
                    <Helper
                        helper={helper1}
                        side='right'
                        name='Keyle \PinkQueen\'
                        btnText='More info'
                    />
                    <Helper
                        helper={helper2}
                        side='left'
                        name='Wallority \SolarDaughter\'
                        btnText='Apply'
                    />
                </HelperContainer>
                <LinksContainer>
                {items.map((item, index) => (
                    <SocialLink
                        key={index}
                        iconName={item.icon}
                    />
                ))}
                </LinksContainer>
            </SageBg>
        </SageContainer>
    )
}