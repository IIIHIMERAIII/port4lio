import styled from 'styled-components';

import sageBg from '../../images/sageBg.jpg';
import { colors, vars } from '../../styles/colors';

export const SageContainer = styled.div`
width: 100%;
border-bottom: 5px solid ${colors.footerBorder};
box-shadow: ${vars.footerShadows};
`;

export const SageBg = styled.div`
padding: 300px 30px 180px 30px;
background-image: url(${sageBg});
background-size: cover;
background-position-y: bottom;
height: 100%;
justify-content: space-between;
display: flex;
`;

export const ContentContainer = styled.div`
justify-content: end;
display: flex;
`;




