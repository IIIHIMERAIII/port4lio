import styled from 'styled-components';


export const ContextContainer = styled.div`
width: 100%;
padding: 20px 20px 0px 20px;
color: white;
display: flex;
flex-direction: row;
justify-content: space-between;
background: rgba(37, 0, 38, 0.4);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(9px);;
flex-direction: column;
align-items: center;
cursor: pointer;
`;

export const TypeBox = styled.div`
height: 300px;
`;

export const  ContextButton = styled.button`
width: 100%;
height: 20px;
background-color: #57dbf540;
border: 0;
border-radius: 16px;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1px);
cursor: pointer;

&:hover {
    background-color: #35b9d3d6;

}
`;