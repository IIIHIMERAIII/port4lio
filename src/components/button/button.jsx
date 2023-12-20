import { BtnContainer, Btn, BtnTitle } from "./styled"


export const Button = ({title}) => {
    return (
        <BtnContainer>
            <Btn>
                <BtnTitle>{title}</BtnTitle>
            </Btn>
        </BtnContainer>
    )
}