import React, { useState } from 'react';
import { SocialLinkContainer, SvgWrapper, Svg, LinkTitle } from './styled';

import sprite from '../../images/sprite.svg';

export const SocialLink = ({ iconName }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <SocialLinkContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
                <Svg>
                    <use xlinkHref={`${sprite}#${iconName}`} />
                </Svg>
        </SocialLinkContainer>
    );
};