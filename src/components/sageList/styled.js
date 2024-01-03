import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const SageListContainer = styled.div`
width: 35%;
`;

export const List = styled.ul`
gap: 20px;
display: flex;
flex-direction: column;
`;

export const ListItem = styled.li`
color: ${colors.white};
padding: 40px 20px 20px 20px;
background: rgba(37, 0, 38, 0.4);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
border: 2px solid #c805ff70;
`;