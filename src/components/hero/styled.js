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
  animation: ${moveForward} 150s linear infinite alternate; /* 10s all road */
  
  



  opacity: ${props => (props.overlay ? '0.1' : '1')};

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
animation: ${moveForward} 150s linear infinite alternate; /* 10s all road */
`;

export const HeroContainer = styled.div`
z-index: 5;
position: relative;
padding-top: 120px;
height: 100%;
`;

export const TitleContainer = styled.div`
border-color: transparent;
border-right: 2px solid red;
border-left: 2px solid red;
border-radius: 16px;
`;

export const HeroTitle = styled(TypeIt)`
padding: 20px 0 20px 0;
border-color: transparent;
justify-content: center;
align-items: center;
display: flex;
font-size: 50px;
color: white;
`;
