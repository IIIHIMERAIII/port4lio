import styled from 'styled-components';

export const SliderContainer = styled.div`
position: relative;
`;

export const TabList = styled.ul`
display: flex;
`;

export const TabItem = styled.li`
width: 640px;
height: 1000px;
background: url(${props => props.src}) center/cover;
justify-content: center;
display: flex;
cursor: pointer;
width: ${props => (props.selected ? "50%" : "35%")};
height: ${props => (props.selected ? "100vh" : "100vh")};
background: url(${props => props.src}) center/cover;

transition: all 1.7s ease; /* Smooth transition animation */

filter: brightness(${props => (props.selected ? "1" : "0.5")}); /* Adjust brightness for unselected tabs */

&:hover {
  filter: brightness(1);
}
`;
