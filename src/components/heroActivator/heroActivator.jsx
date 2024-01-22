
import { ActivatorContainer, ActivatorButton, DotList, DotListItem } from "./styled"

export const HeroActivator = ({ event }) => {
    const dot = [{dot: 1}, {dot: 2}, {dot: 3}]
    
    
    
    return (
        <ActivatorContainer>
            <ActivatorButton
                onMouseOver={() => event(true)}
                onMouseLeave={() => event(false)}
            >
               <DotList>
                    {dot.map((index, i) => (
                        <DotListItem 
                            key={index}
                            delay={`${i * 2.5}s`}
                        />
                    )) }
               </DotList>
            </ActivatorButton>
        </ActivatorContainer>
    )
}