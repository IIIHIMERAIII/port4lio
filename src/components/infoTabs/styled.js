import styled, {keyframes} from 'styled-components';

import { colors} from '../../styles/colors';



export const InfoTabsContainer = styled.div`

`;

export const TabTitle = styled.h1`
margin-top: 120px;
margin-bottom: 50px;
text-align: center;
color: ${colors.white};
`;

export const TabContainer = styled.div`

`;

export const TabList = styled.ul`
height: 650px;
display: flex;
border-top: 3px solid black;
border-bottom: 3px solid black;
`

export const TabListItem = styled.li`
width: 50%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};

&:hover {
    
}
`;