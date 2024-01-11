import { useState} from "react";
import { SliderContainer, TabItem, TabList} from "./styled";
import { Button } from "../button/button";
import { TabText } from "../tabText/tabText";
import { tabText } from "../../styles/vars";

import bg1 from '../../images/link_bg1.webp';
import bg2 from '../../images/link_bg2.webp';
import bg3 from '../../images/link_bg3.webp';



const items = [
    {image: bg1, title: 'Manual', text: tabText.tab1, alt: tabText.tabAlt1, route: '/info'},
    {image: bg2, title: 'Partfolio' , text: tabText.tab2, alt: tabText.tabAlt2, route: '/info'}, 
    {image: bg3, title: 'Contacts', text: tabText.tab3, alt: tabText.tabAlt3, route: '/info'}
];


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
                    alt={item.descr}
                    onClick={() => onClick(index)}
                    selected={index === tab}
                    >
                        <Button
                            title={item.title}
                            route={item.route}
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