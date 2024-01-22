import styled, {keyframes} from 'styled-components';

const moveDots = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(60px - -20px)); // Смещение на ширину одной точки
  }
  100% {
    transform: translateX(0);
  }
`;


export const ActivatorContainer = styled.div`
height: 100%;
align-items: center;
justify-content: center;
display: flex;
`;

export const ActivatorButton = styled.button`
padding: 0;
width: 15%;
height: 80px;

border-color: transparent;
border-right: 5px solid #ffffff5e;
border-left: 5px solid #ffffff5e;
border-radius: 16px;
box-shadow: 0px 0px 23px 12px #F5F5F54A;


background-color: transparent;
cursor: pointer;

&:hover {
    box-shadow: 0px 0px 23px 12px #06D7F991;
    animation-play-state: paused;
}
`;

export const DotList = styled.ul`
height: 100%;
width: 70%;
gap: 20px;
justify-content: center;
align-items: center;    
display: flex;
animation: ${moveDots} 5s linear infinite;
animation-play-state: inherit;
`;

export const DotListItem = styled.li`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: white;
`;

