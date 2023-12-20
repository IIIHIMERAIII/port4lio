import styled from 'styled-components';

import { vars } from '../../styles/colors';

export const BtnContainer = styled.div`
position: fixed;
`;


export const Btn = styled.button`
  margin-top: 50px;
  width: 270px;
  height: 50px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid rgb(42, 193, 209);
  position: relative;
  color: #0bf4f3;
  transition: all 0.7s ease;
  border: 1px solid #0bf4f3;
  box-shadow: ${vars.neonShadows};
  cursor: pointer;

  /* Style for :after */
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #0bf4f3;
    box-shadow: 0 0 20px  #5ffbfa;
    transition: all 0.6s ease;
  }

  /* Style for hover */
  &:hover {
    color: #fff;
  }

  /* Style for hover and :after */
  &:hover::after {
    left: 0;
    width: 100%;
  }

  /* Style for active */
  &:active {
    top: 2px;
  }
`;

export const BtnTitle = styled.a`
font-size: 23px;
line-height: 1.3;
letter-spacing: 0.135em;
`
  