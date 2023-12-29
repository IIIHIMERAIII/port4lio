import { useState } from "react";

import { 
    QuestContainer, 
    LeftTab, 
    RightTab,
    TabImgOverlay,
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

import { text } from "../../styles/vars";

export const Quest = () => {
    const [isTabHover, setTabHover ] = useState(0)
    const [isBgHovered, setIsBgHovered] = useState(false);
    const [isClick,  setIsClick] = useState(false);
    const [isOpen, setOpenTab] = useState(0);

    const handleTransitionEnd = () => {
        if (isClick) {
          // If click is true, set the component to hidden
          setIsClick(false);
          setIsBgHovered(false);
        }
      };

    console.log(isTabHover)

    return (
        <QuestContainer>
            <OnClickContainer 
                className={`${isBgHovered ? 'hovered' : ''} ${isClick ? 'hidden' : ''}`}
                isClick={isClick}
                onTransitionEnd={handleTransitionEnd}
            >
                <QuestTitle 
                    className={isBgHovered ? "hovered" : ""}
                >
                    {text.questTitle}
                </QuestTitle>
                <QuestSubTitle className={isBgHovered ? "hovered" : ""}>
                    {text.questSubTitle}
                </QuestSubTitle>
                <QuestButton         
                    className="button"
                    eventEnter={() => setIsBgHovered(true)}
                    eventLeave={() => setIsBgHovered(false)}
                    eventClick={() => setIsClick(true)}
                >
                </QuestButton>
            </OnClickContainer>
            <TabsContainer
               isClick={isClick}
            >
                <LeftTab
                    onClick={() => setOpenTab(1)}
                    onMouseEnter={() => setTabHover(1)}
                    onMouseLeave={() => setTabHover(0)}
                >
                    {isClick && (
                        <TabTitle>
                            {text.questLeftTab}
                        </TabTitle>
                    )}
                    <TabImgOverlay 
                        style={{ opacity: isTabHover === 1 ? 0 : 1,}} />
                    <TabImg
                        src={LeftTabBg}
                    />
                </LeftTab>
                <RightTab
                    onClick={() => setOpenTab(2)}
                    onMouseEnter={() => setTabHover(2)}
                    onMouseLeave={() => setTabHover(0)}
                >
                    {isClick && (
                        <TabTitle>
                            {text.questRightTab}
                        </TabTitle>
                    )}
                    <TabImgOverlay 
                        style={{ opacity: isTabHover === 2 ? 0 : 1}} />
                    <TabImg
                        src={RightTabBg}
                    />
                </RightTab>
            </TabsContainer>
        </QuestContainer>
    )
}