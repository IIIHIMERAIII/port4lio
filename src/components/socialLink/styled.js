import styled from 'styled-components';

export const Svg = styled.svg`
width: 100%;
height: 100%;
border-radius: 50%;
fill: black; /* Set initial fill color */
transition: fill 0.3s ease-in-out; /* Add transition to fill and transform */s
`;

export const SocialLinkContainer = styled.div`
gap: 20px;
justify-content: center;
align-items: center;
display: flex;
cursor: pointer;
overflow: hidden;
border-radius: 50px;
background: #37373785;

/* Animation for changing width */
transition: width 0.5s ease-in-out, background 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

&:hover {
    width: 20%;
    transition-delay: 0.5s;

    /* Box shadow and background color animation on hover */
    box-shadow: 0 0 5px rgb(255, 2, 251), 0 0 5px #38015e inset;
    background: #000000c9;
    ${Svg} {
        fill: white;
        /* Fill color animation on hover */
        transition: fill 0.5s ease-in-out;
    }
}
`;

export const SvgWrapper = styled.div`

`;

export const LinkTitle = styled.div`
align-items: center;
display: flex;
height: 100%;
font-family: 'Anton',sans-serif;
color: white;
font-size: 35px;
font-weight: 800;
`;