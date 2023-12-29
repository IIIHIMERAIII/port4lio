import { SageContainer, SageBg, HelperContainer, Helper, DialogContainer, DialogTitle } from "./style"

import helper from '../../images/helper.png';

export const Sage = () => {
    return (
        <SageContainer>
            <SageBg>
                <HelperContainer>
                    <Helper
                        src={helper}
                    />
                    <DialogContainer>
                        <DialogTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo omnis molestias totam voluptatem dolor eum nisi ducimus vero, aliquam corrupti est mollitia obcaecati, recusandae et accusamus. Vero sapiente alias magni. Libero nobis praesentium rem eveniet magni quia perferendis tempora placeat! Esse libero quis quaerat at enim beatae doloribus minima, est, voluptatem cupiditate deleniti! Quasi culpa alias quia! Odit dolorum perferendis quaerat esse enim doloribus quae quas laudantium cupiditate laboriosam.</DialogTitle>
                    </DialogContainer>
                </HelperContainer>
            </SageBg>
        </SageContainer>
    )
}