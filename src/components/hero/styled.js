import styled, {keyframes} from 'styled-components';
import TypeIt from 'typeit-react';

import heroBg from  '../../images/heroBg.png';
import heroBgBlack from '../../images/heroBgBlack.png';


import {colors, vars } from '../../styles/colors';

const moveForward = keyframes`
  from {
    background-position-x: 1px;
  }
  to {
    background-position-x: -2000px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  background-image: url(${heroBgBlack});
  background-position: bottom;
  background-repeat: no-repeat;
  height: 1400px;
  width: 100%;
  
  background-position-x: 1px;
  animation: ${moveForward} 60s linear infinite alternate; /* 10s all road */
  
  



  opacity: 1;
  transition: opacity 0.7s ease-in-out;
`;

export const HeroOverlay = styled.div`
position: relative;
background-image: url(${heroBg});
background-position: bottom;
background-repeat: no-repeat;
height: 1400px;
width: 100%;

background-position-x: 1px;
animation: ${moveForward} 60s linear infinite alternate; /* 10s all road */

&:hover ${HeroBg} {
  opacity: 0.1;
}

`;

export const HeroContainer = styled.div`
z-index: 5;
position: relative;
padding-top: 120px;
height: 100%;
`;

export const HeroTitle = styled(TypeIt)`
padding: 20px 0 20px 0;
border-top: 2px solid white;
border-bottom: 2px solid white;
justify-content: center;
align-items: center;
display: flex;
font-size: 50px;
color: white;
`;