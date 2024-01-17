import { InfoTabsContainer, TabTitleContainet, TabList, TabListItem } from "./styled";
import { Helper } from "../helper/helper";
import scenarios from '../../helperScenarios/helperScenarios.json';
import helper1 from '../../images/helper.png';
import tab1 from '../../images/tab1.jpg';
import tab2 from '../../images/tab2.jpg';
import { useState } from 'react';

const items = [
  { image: tab1, name: 'Ofasfsafas' },
  { image: tab2, name: 'Ofasfsafas' }
];

export const InfoTabs = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [helperDisplay, setHelperDisplay] = useState(false);

  const closeHelper = scenarios[scenarioIndex].closeHelper;
  const showInput = scenarios[scenarioIndex].showInput;

  console.log(scenarioIndex)
  console.log(showInput)

  // event logic
  const Event1 = () => {
    if (closeHelper) {
      setHelperDisplay(true);
    } else  {
      // If neither closeHelper nor showInput is true
      setScenarioIndex(scenarioIndex + 1);
    }
  };

  const Event2 = () => {
    setScenarioIndex(3);
  }

  // props compilation
  const helperProps = {
    id: scenarioIndex,
    avatar: helper1,
    scenario: scenarios[scenarioIndex],
    inputDisplay: showInput,
    btn1Event: Event1,
    btn2Event: Event2,
  }

  return (
    <InfoTabsContainer>
      
      {!helperDisplay && (
        <Helper
          props={helperProps}
        />
      
      )}
        <TabTitleContainet>
        </TabTitleContainet>
        <TabList>
          {items.map((item, index) =>
            <TabListItem
              key={index}
              backgroundImage={item.image}
            />
          )}
        </TabList>
      </InfoTabsContainer>
    );
  }