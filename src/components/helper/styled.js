import styled, { keyframes } from 'styled-components';

// helper animations keyframes

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 4px 35px rgba(255, 2, 251, 0.8);
  }
  50% {
    box-shadow: 0 4px 40px rgba(255, 2, 251, 0.4);
  }
  100% {
    box-shadow: 0 4px 30px rgba(255, 2, 251, 0.8);
  }
`;

const opacityAnimation = keyframes`
  0% {
    backdrop-filter: blur(4px);
  }
  50% {
    backdrop-filter: blur(2px);
  }
  100% {
    backdrop-filter: blur(1px);
  }
`;

const scaleAnimation = keyframes`
0% {
  transform: scale(1.0)
}
25% {
  transform: scale(1.01)
}
50% {
  transform: scale(1.02)
}
75% {
  transform: scale(1.01)
}
100% {
  transform: scale(1.0)
}
`


export const HelperContainer = styled.div`
height: 50%;
width: 40%;
display: flex;
flex-direction: row;
justify-content: center;
gap: 60px;
`;


export const CharacterContainer = styled.div`
height: 50%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
background: rgba(37, 0, 38, 0.4);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(9px);
animation: ${floatingAnimation} 5s ease-in-out infinite;
flex-direction: column;
align-items: center;

&:hover {
  animation-play-state: paused;
}
`;

export const HelperImg = styled.img`
width: 100%;
cursor: pointer;

// Neon imitation

background: rgba(255, 2, 251, 0.52);
border-radius: 50%;
box-shadow: 0 4px 30px rgb(255, 2, 251);
backdrop-filter: blur(4px);
border: 2px solid #c907ff61;

// Helper animations
  
animation: ${pulseAnimation} 2s infinite, ${opacityAnimation} 2s infinite alternate, ${scaleAnimation} 1.5s infinite;

// hover and focus animations

&:hover {
  animation-play-state: paused;
}

`;

export const SageNameContainer = styled.div`
padding: 2px;
margin-top: 20px;
margin-bottom: 20px;
border-top: 2px solid white;
border-bottom: 2px solid white;
height: ${props => (props.status ? "150px" : "0")};
opacity: ${props => (props.status ? "1" : "0")};
transition: height 1.5s ease-in-out, opacity 1.5s ease-in-out;
`;

export const SageName = styled.span`
color: white;
text-align: center;
font-family: 'Anton',sans-serif;
font-size: 50px;
font-weight: 900;
`;


