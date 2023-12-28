import styled, { keyframes } from 'styled-components';
import { colors, vars } from '../../styles/colors';

// Keyframes for the box-shadow animation
export const boxShadowAnimation = keyframes`
  0%, 100% {
    box-shadow: ${vars.questBtnShadow};
  }
  25% {
    box-shadow: ${vars.questBtnShadow2};
  }
  50% {
    box-shadow: ${vars.questBtnShadow3};
  }
  75% {
    box-shadow: ${vars.questBtnShadow1};
  }
  100% {
    box-shadow: ${vars.questBtnShadow};
  }
`;

export const Button = styled.button`    
position: absolute;
bottom: 20%;
width: 150px;
height: 150px;
justify-content: center;
align-items: center;
display: flex;
border-radius: 50%;
border: 1px solid white;
background: ${colors.white};
fill: ${colors.questBtnFill};
transition: box-shadow 1.3s ease-in-out, background 0.8s ease-in-out;
cursor: pointer;

  &:hover, &:focus {
    fill: ${colors.questBtnFillHover};
    background: ${colors.questBtnBgHover};
    border: 1px solid ${colors.questBtnFillHover};
  }

  /* Apply the box-shadow animation by default */
  animation: ${boxShadowAnimation} 5s infinite ease-in-out;
`;

export const Svg = styled.svg`
  width: 80%;
  height: 80%;
`;

