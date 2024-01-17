import styled from 'styled-components';


export const ContextContainer = styled.div`
width: 100%;
padding: 20px 20px 0px 20px;
gap: 10px;
color: white;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-direction: column;
align-items: center;
cursor: pointer;
`;

export const Input = styled.input`
text-align: center;
font-size: 24px;
padding: 5px;
margin-bottom: 120px;
color: white;
background-color: #57dbf540;
border-top: 1px solid transparent;
border-bottom: 1px solid transparent;
border-right:1px solid transparent;
border-left:1px solid transparent;

&::placeholder {
    color:white;
}

&:hover, &:focus {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color: #006b80d6;
    outline: none;
}
`;

export const TypeBox = styled.div`
height: 300px;
`;

export const  ContextButton = styled.button`
width: 100%;
height: 20px;
padding: 15px;
justify-content: center;
align-items: center;
display: flex;
color:white;
background-color: #57dbf540;
border: 0;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1px);
cursor: pointer;

&:hover {
    background-color: #006b80d6;

}
`;