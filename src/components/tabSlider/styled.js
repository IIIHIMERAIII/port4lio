import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const SliderContainer = styled.div`
position: relative;
z-index: 100;
`;

export const TabList = styled.ul`
display: flex;
`;

export const TabItem = styled.li`
padding: 50px;
background: url(${props => props.src}) center/cover;
align-items: center;
flex-direction: column;
display: flex;
cursor: pointer;
width: ${props => (props.selected ? "50%" : "35%")};
height: ${props => (props.selected ? "1000px;" : "1000px;")};
background: url(${props => props.src}) center/cover;
transition: all 2.7s ease; /* Smooth transition animation */

filter: brightness(${props => (props.selected ? "1" : "0.5")}); /* Adjust brightness for unselected tabs */

&:hover {
  filter: brightness(1);
}
`;
