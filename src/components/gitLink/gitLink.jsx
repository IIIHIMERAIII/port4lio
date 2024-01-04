import { GitLinkContainer, Svg } from './styled';


import sprite from '../../images/sprite.svg';

export const GitLink = ({iconName}) => {
    return (
        <GitLinkContainer>
            <Svg>
                <use xlinkHref={`${sprite}#${iconName}`} />
            </Svg>
        </GitLinkContainer>
    )
}