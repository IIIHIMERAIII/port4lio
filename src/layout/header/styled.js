import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderTitle = styled.h1`
position: absolute;
text-align: center;
font-family: 'Anton',sans-serif;
font-size: 30px;
font-weight: 900;
color: white;

transition: transform 0.5s ease-in-out;
`;

export const HeaderNav = styled.nav`
display: flex;
gap: 50px;

transform: translateY(-100%);
transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

export const HeaderContainer = styled.header`
position: fixed;
z-index: 999;
top: 0px;
justify-content: center;
display: flex;
width: 100%;
background-color: black;
box-shadow: 0 -10px 69px #5a00624f,0 -1px 1px #f911854f inset;

&:hover {
    ${HeaderNav} {
      opacity: 1;
      transform: translateY(0);
    }

    ${HeaderTitle} {
        transform: translateX(-300%);
    }
  }
`;


export const NavLink = styled(Link)`
padding: 20px;
color: white;
`;