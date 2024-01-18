import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Svg = styled.svg`
height: 100%;
width: 100%;
border-radius: 50%;
fill: #fffdfd36;
transition: all 0.5s ease-in-out; /* Add transition to fill and transform */s
`;

export const SocialLinkContainer = styled(Link)`
padding: 20px;
border-radius: 50%;
justify-content: center;
align-items: center;
display: flex;
cursor: pointer;

&:hover ${Svg} {
    fill: #a73229eb;
    height: 150%;
    width: 150%;
  }
`;

export const LinksContainer = styled.div`
gap: 30px;
display: flex;
justify-content: center;
`;


export const SvgWrapper = styled.div`

`;

export const LinkTitle = styled.div`
align-items: center;
display: flex;
height: 100%;
font-family: 'Anton',sans-serif;
color: white;
font-size: 35px;
font-weight: 800;
`;