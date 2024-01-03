import { SageContainer, SageBg, ContentContainer} from "./style"


import { SageList } from "../sageList/sageList";
import { Helper } from "../helper/helper";

export const Sage = () => {
    return (
        <SageContainer>
            <SageBg>
                <Helper/>
                <ContentContainer>
                    <SageList/>
                </ContentContainer>
            </SageBg>
        </SageContainer>
    )
}