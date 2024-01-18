import styled, {keyframes} from 'styled-components';

import {colors, vars} from '../../styles/colors';
import { animation } from '../../styles/vars';

const moveUpAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const moveDownAnimation = keyframes`
  0% {
    transform: translateY(-400%);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

export const QuestContainer = styled.div`
display: flex;
position: relative;
`;

export const OnClickContainer = styled.div`
z-index: 2;
width: 100%;
height: 100%;
align-items: center;
display: flex;
flex-direction: column;
position: absolute;
background: ${colors.backGroundCyan};

// when eventClick is true

animation: translateY(${({ isClick }) => (isClick ? '0px' : '-100px')} 10s ease);
opacity: ${({ isClick }) => (isClick ? '0' : '1')};
pointer-events: ${({ isClick }) => (isClick ? 'none' : 'auto')}; // Disable pointer events when animating out


&.hidden {
  display: none;
}

// glass filter

backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );

// animation when mouse im button range

&.hovered {
    transition: background 1.5s ease, backdrop-filter 3.0s ease, box-shadow 2.5s ease;
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
  }

// transition when mouse leaves button range

&:not(.hovered) {
  transition: background 1.5s ease, backdrop-filter 3.0s ease, box-shadow 2.5s ease;
  background: ${colors.questOverlay};
  backdrop-filter: blur(8.5px);
}
`;

export const QuestTitle = styled.h1`
width: 80%;
margin-top: 10%;
text-align: center;
border-radius: 15px;
color: ${colors.white};
padding: 20px;

// animation prop

cubic-bezier: ${animation.tabCubic};
transition: all 1.3s ease;

// animation when mouse im button range

&.hovered {
    animation: ${moveUpAnimation} 2.5s ease forwards;
    border: 5px solid ${colors.primaryOrange};
  }

// transition when mouse leaves button range

&:not(.hovered) {
    transition: transform 1.5s ease, opacity 1.5s ease, border 1.5s ease;
    transform: translateY(0);
    opacity: 1;
    border: 5px solid transparent;
}
`;

export const QuestSubTitle = styled.h1`
width: 80%;
margin-top: 10%;
text-align: center;
border-radius: 15px;
color: ${colors.white};
background: ${colors.subOrange};
box-shadow: ${vars.questSubTitleBS};
padding: 20px;
opacity: 0;

// animation prop

transition: all 0.5s ease-out;

// animation when mouse im button range

&.hovered {
    animation: ${moveDownAnimation} 2.5s ease forwards;
    border: 5px solid ${colors.primaryOrange};
    box-shadow: ${vars.questSubTitleBS};
  }

// transition when mouse leaves button range

&:not(.hovered) {
  transform: translateY(0);
  opacity: 0;
  border: none;
}
`;

export const TabsContainer = styled.div`
z-index: 1;
width: 100%;
display: flex;
pointer-events: ${({ isClick }) => (isClick ? 'auto' : 'none')};
`; 

export const LeftTab = styled.div`
width:100%;
position: relative;
justify-content: center;
display: flex;
cursor: pointer;
font-size: 40px;

transition: width 1.5s ease, font-size 1.5s ease; /* Adjust the duration and timing function as needed */

&:hover, &:focus {
    width: 160%;
    font-size: 50px;
}
`;

export const RightTab = styled.div`
width:100%;
position: relative;
justify-content: center;
display: flex;
cursor: pointer;
font-size: 40px;

transition: width 1.5s ease, font-size 0.5s ease; /* Adjust the duration and timing function as needed */

&:hover, &:focus {
    width: 160%;
    font-size: 50px;
}
`;

export const TabTitle = styled.a`
z-index: 5;
top: 10%;
font-family: 'Anton', sans-serif;
font-size: inherit;
font-weight: 900;
letter-spacing: 0.17em;
line-height: 1.4;
position: absolute;
color: ${colors.white};

// border and shadows options

border: 5px solid ${colors.primaryOrange};
padding: 20px;
border-radius: 16px;
box-shadow: 0px 25px 50px 0px rgba(255, 225, 106, 0.5);;

// text animation 

cubic-bezier: ${animation.tabCubic};
transition: all 1.3s ease;

// glass overlay 

backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.2);
`;

export const TabImgOverlay = styled.div`
width: 100%;
height: 100%;
top: 0;
position: absolute;;
background: ${colors.questTabOverlay};
z-index: 5;

// OverlayAnimation

cubic-bezier: ${animation.tabCubic};
transition: opacity 2.5s ease;
`;

export const TabImg = styled.img`
z-index: 2;
position: relative;
width: 100%;
height: 100%;
object-fit: cover;
`;