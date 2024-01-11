import React, { useState } from 'react';
import { SocialLinkContainer, SvgWrapper, Svg, LinkTitle } from './styled';
import TypeIt from 'typeit-react';
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
            <SvgWrapper>
                <Svg>
                    <use xlinkHref={`${sprite}#${iconName}`} />
                </Svg>
            </SvgWrapper>
            <LinkTitle>
                {isHovered && (
                    <TypeIt
                    options={{
                        speed: 350,
                        wait: 1500,
                      }}
                    >
                        Some section
                    </TypeIt>
                )}
            </LinkTitle>
        </SocialLinkContainer>
    );
};