import { BtnContainer, Btn, BtnTitle } from "./styled"


export const Button = ({title, position, route }) => {
    return (
        <BtnContainer 
            style={{ position: position }}
            to={route}
            alt={`To ${title} link`}
            >
            <Btn 
                style={{ position: position }}
                to={route}
            >
                <BtnTitle>{title}</BtnTitle>
            </Btn>
        </BtnContainer>
    )
}