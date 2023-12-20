import styled, { keyframes } from 'styled-components';
import { vars, colors } from '../../styles/colors';
import TypeIt from 'typeit-react';

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(5px);
  }
  16% {
    transform: translateY(15px);
  }
  32% {
    transform: translateY(5px);
  }
  48% {
    transform: translateY(15px);
  }
  64% {
    transform: translateY(5px);
  }
  80% {
    transform: translateY(15px);
  }
  96% {
      transform: translateY(0);
  }
`;

const backgroundAnimation = keyframes`
  0% {
    background-color: ${colors.glassCyan};
  }
  25% {
    background-color: ${colors.activeCyan};
  }
  50% {
    background-color: ${colors.glassCyan};
  }
  75% {
    background-color: ${colors.activeCyan};
  }
  100% {
    background-color: ${colors.glassCyan};
  }
`;

const boxShadowAnimation = keyframes`
  0%, 100% {
    box-shadow: ${vars.neonShadows};
  }
  25% {
    box-shadow: ${vars.neonShadowsAnim};
  }
  50% {
    box-shadow: ${vars.neonShadows};;
  }
  75% {
    box-shadow: ${vars.neonShadowsAnim2};
  }
  100% {
    box-shadow: ${vars.neonShadows};;
  }
`;


export const TitleWrapper = styled.div`
width: 100%;
justify-content: space-between;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border-radius: 5px;
text-align: center;
margin-top: 0; /* Start with margin-top 0 */
height: 0; /* Start with height 0 */
background: ${colors.glassCyan};
box-shadow: ${vars.neonShadows};
backdrop-filter: blur(3.9px);
border: 1px solid rgba(0, 252, 242, 1);
width: 0; /* Start with width 0 */
transition: all 0.2s ease;
animation: ${bounceAnimation} 6s infinite, 
${backgroundAnimation} 5.5s infinite, 
${boxShadowAnimation} 5.5s infinite; /* Add the changing box-shadow color animation */


&.visible {
    margin-top: 90px;
    width: 100%;
    height: 60%;
}
`;

export const Title = styled(TypeIt)`
  font-size: 30px;
  color: ${colors.primaryCyan};
  text-shadow: ${vars.textShadow};
`;

export const ButtonWrapper = styled.div`
display: flex;
gap: 60px;
`;