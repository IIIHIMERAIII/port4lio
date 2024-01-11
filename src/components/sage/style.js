import styled from 'styled-components';

import sageBg from '../../images/sageBg.jpg';
import { colors, vars } from '../../styles/colors';


export const SageContainer = styled.div`
width: 100%;
border-bottom: 5px solid ${colors.footerBorder};
box-shadow: ${vars.footerShadows};
`;

export const SageBg = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 440px 30px 180px 30px;
background-image: url(${sageBg});
background-size: cover;
background-position-y: bottom;
height: 100%;
`;

export const HelperContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const LinksContainer = styled.div`
gap: 30px;
display: flex;
justify-content: center;
`;


export const ContentContainer = styled.div`
justify-content: end;
display: flex;
`;




