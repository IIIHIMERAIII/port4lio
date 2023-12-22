import styled from 'styled-components';

import {colors } from '../../styles/colors';

export const HeroContainer = styled.div`
  text-align: center;
  padding-top: 100px;
  width: 100%;
  opacity: 0;
  transform: translateY(-100%);
  background-color: ${colors.grayBg}; /* Add  background color */
  transition: opacity 2.7s ease, transform 2.7s ease, background-color 1.7s ease; /* Include background-color in the transition */

  &.visible {
    opacity: 1;
    transform: translateY(0);
    background-color: #5c605f70; /* Set background-color to transparent when visible */
  }
`;


export const HeroTitle = styled.a`
  font-size: 50px;
  color: white;
`;