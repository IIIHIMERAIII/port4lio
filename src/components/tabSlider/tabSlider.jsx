import { useState} from "react";
import { SliderContainer, TabItem, TabList} from "./styled";
import { Button } from "../button/button";
import { TabText } from "../tabText/tabText";
import { tabText } from "../../styles/vars";

import bg1 from '../../images/link_bg1.webp';
import bg2 from '../../images/link_bg2.webp';
import bg3 from '../../images/link_bg3.webp';

const items = [{image: bg1, title: 'Job', text: tabText.tab1},{image: bg2, title: 'Partfolio' , text: tabText.tab2}, {image: bg3, title: 'Contacts', text: tabText.tab3}];


export const TabSlider = () => {
    const [tab, setTab] = useState(null);
    
    const onClick = (index) => {
        setTab(tab === index ? null : index);
        console.log(tab)
    };


    return (
        <SliderContainer id="tabSlider">
            <TabList>
            {items.map((item, index) => (
                    <TabItem 
                    key={index} 
                    src={item.image}
                    onClick={() => onClick(index)}
                    selected={index === tab}
                    >
                        <Button
                            title={item.title}
                        />
                        {index === tab && 
                        <TabText
                            text={item.text || ""}
                        />}
                    </TabItem>
            ))}
            </TabList>
        </SliderContainer>  
    )
}