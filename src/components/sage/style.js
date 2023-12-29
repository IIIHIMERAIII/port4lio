import styled, { keyframes } from 'styled-components';

import sageBg from '../../images/sageBg.jpg';

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
`;


export const SageContainer = styled.div`
width: 100%;
height: 100vh;
`;

export const SageBg = styled.div`
padding: 60px;  
justify-content: start;
align-items: flex-end;
display: flex;
background-image: url(${sageBg});
background-size: cover;
background-position-y: bottom;
width: 100%;
height: 100%;
`;


export const HelperContainer = styled.div`
display: flex;
align-items: center;
gap: 60px;
`;

export const Helper = styled.img`
animation: ${floatingAnimation} 3s ease-in-out infinite;
width: 250px;

`;

export const DialogContainer = styled.div`

padding: 20px;
background: #000000d6;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const DialogTitle = styled.a`
color: white;
`;