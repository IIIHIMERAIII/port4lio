import { InfoTabsContainer, TabTitle, TabList, TabListItem  } from "./styled";

import tab1 from '../../images/tab1.jpg';
import tab2 from '../../images/tab2.jpg';

const items = [{image: tab1, name: 'Ofasfsafas'},{image: tab2, name: 'Ofasfsafas'}]

export const InfoTabs = () => {
    return (
        <InfoTabsContainer>
            <TabTitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, earum?</TabTitle>
            <TabList>
            {items.map((item, index) => 
                <TabListItem
                    key={index}
                    backgroundImage={item.image}
                />
            )}
            </TabList>
        </InfoTabsContainer>
    )
}