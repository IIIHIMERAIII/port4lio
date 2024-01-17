import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderTitle = styled.h1`
position: absolute;
text-align: center;
font-family: 'Anton',sans-serif;
font-size: 30px;
font-weight: 900;
color: white;

transition: transform 0.8s ease-in-out;
`;

export const HeaderNav = styled.nav`
display: flex;
gap: 30px;

transform: translateY(-100%);
transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

export const HeaderContainer = styled.header`
position: fixed;
z-index: 999;
height: 50px;
top: 0px;
cursor: pointer;
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
      transform: translateX(-350%);
    }
  }
`;


export const NavLink = styled(Link)`
font-family: 'Anton',sans-serif;
font-size: inherit;
font-weight: 900;
letter-spacing: 0.17em;
line-height: 1.4;


color: white;
padding: 10px 20px 10px 20px;
text-decoration: none;
border: 1px solid transparent;
box-shadow: 0 -10px 69px transparent,0 -1px 1px transparent inset;
border-radius: 6px;

// animation

transition: all 1.5s;

&:hover {
  border: 1px solid #81f1e5;
  letter-spacing: 10px;
  box-shadow: 0 0px 70px #ed22ff4f,0 0px 50px #f911854f inset;
  color: #81f1e5;
}
`;