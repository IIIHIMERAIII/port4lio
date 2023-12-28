import { useState } from "react";

import { 
    QuestContainer, 
    LeftTab, 
    RightTab, 
    TabImg, 
    OnClickContainer, 
    QuestTitle, 
    QuestSubTitle,
    TabsContainer,
    TabTitle,
} from "./styled"

import { QuestButton } from "../questButton/questButton";

import LeftTabBg from '../../images/LeftTab.jpg';
import RightTabBg from '../../images/RightTab.jpg';


export const Quest = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClick,  setIsClick] = useState(false);
    const [isOpen, setOpenTab] = useState(0);

    const handleTransitionEnd = () => {
        if (isClick) {
          // If click is true, set the component to hidden
          setIsClick(false);
          setIsHovered(false);
        }
      };
      

    console.log(isOpen)

    return (
        <QuestContainer>
            <OnClickContainer 
                className={`${isHovered ? 'hovered' : ''} ${isClick ? 'hidden' : ''}`}
                isClick={isClick}
                onTransitionEnd={handleTransitionEnd}
            >
                <QuestTitle 
                    className={isHovered ? "hovered" : ""}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae sit temporibus nesciunt impedit illum ipsa odio vel omnis ex adipisci?
                </QuestTitle>
                <QuestSubTitle className={isHovered ? "hovered" : ""}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae sit temporibus nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </QuestSubTitle>
                <QuestButton         
                    className="button"
                    eventEnter={() => setIsHovered(true)}
                    eventLeave={() => setIsHovered(false)}
                    eventClick={() => setIsClick(true)}
                >
                </QuestButton>
            </OnClickContainer>
            <TabsContainer
               isClick={isClick}
            >
            <LeftTab
                onClick={() => setOpenTab(1)}
            >
                <TabTitle>
                    Lorem ipsum dolor sit.
                </TabTitle>
                <TabImg
                    src={LeftTabBg}
                />
            </LeftTab>
            <RightTab
                onClick={() => setOpenTab(2)}
            >
                <TabTitle>
                    Sit dolor sit ipsum.
                </TabTitle>
                <TabImg
                    src={RightTabBg}
                />
            </RightTab>
            </TabsContainer>
        </QuestContainer>
    )
}