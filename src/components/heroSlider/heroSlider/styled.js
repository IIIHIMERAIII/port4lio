import styled from 'styled-components';

import { vars } from '../../../styles/colors';

export const SliderOverlay = styled.div`

`;

export const SliderContainer = styled.div`
padding-top: 120px;
padding-bottom: 500px;
`;

export const SliderList = styled.ul`
justify-content: center;
display: flex;
`;

export const SliderItem = styled.li`


// light imitation on border 

box-shadow: ${vars.cardsShadow};


// margins for cards 

margin-right: ${(props) => (props.index === 0 || props.index === 1  ? '-100px' : props.index === 2 ? '200px' : '0')};
margin-left: ${(props) => (props.index === 5 || props.index === 6 ? '-100px' : props.index === 4 ? '200px' : '0')};

// z index position  

z-index: ${(props) => {
    if (props.index <= 2) {
      return props.index + 1;
    } else if (props.index >= 4) {
      return 6 - props.index;
    } 
    else if (props.index === 3) {
        return 10
    }
    else {
      return 1;
    }
  }};

// width picture styles 

width: ${(props) => {
        if (props.index === 3) {
            return '30%'
        }
        else if (props.index !== 3) {
            return '25%'
        }
    }};

height: ${(props) => {
    if (props.index === 3) {
        return '70%'
    }
}};

   
// margin position
margin-bottom:${(props) => {
    if (props.index <= 2) {
        return props.index  * -90 + 'px';
    } else if (props.index >= 4) {
        return (6 - props.index) * -90 + 'px';
    } else if (props.index === 3) {
        return 0;
    } else {
        return 0;
    }
}};

margin-top:${(props) => {
    if (props.index <= 2) {
        return props.index  * 90 + 'px';
    } else if (props.index >= 4) {
        return (6 - props.index) * 90 + 'px';
    } else if (props.index === 3) {
        return 0;
    } else {
        return 0;
    }
}};

// main picture styles 

position: ${(props) => {
    if (props.index === 3) {
        return 'absolute';
    } 
}};


`;


export const SliderImg = styled.img`
width: 100%;
height: 100%;
`;