import { BtnContainer, Btn, BtnTitle } from "./styled"


export const Button = ({title, position }) => {
    return (
        <BtnContainer style={{ position: position }}>
            <Btn>
                <BtnTitle>{title}</BtnTitle>
            </Btn>
        </BtnContainer>
    )
}