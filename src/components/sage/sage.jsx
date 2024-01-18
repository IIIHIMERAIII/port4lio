import { useState, useEffect  } from "react";
import { useSelector } from "react-redux";

import { Helper } from "../helper/helper";
import { SageContainer, SageBg, HelperContainer, LinksContainer} from "./style"

import scenarios from '../../helperScenarios/helperScenarios.json';

import helper1 from  '../../images/helper.png';

import { SocialLink } from "../socialLink/socialLink";
import { redirect, redirectDocument } from "react-router-dom";


export const Sage = () => {
    const userName = useSelector(state => state.user.UserName);
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [helperDisplay, setHelperDisplay] = useState(false);
    const [redirect, setRedirect] = useState(false)
  
    const closeHelper = scenarios[scenarioIndex].closeHelper;
    const showInput = scenarios[scenarioIndex].showInput;

    console.log(redirect)

    useEffect(() => {
        // Check the condition when userName is not equal to 'test'
        if (userName !== 'test') {
            // Set scenarioIndex to 5
            setScenarioIndex(5);
        } else {
            // Set scenarioIndex to 0 if userName is 'test'
            setScenarioIndex(0);
        }
    }, [userName]);

    const Event1 = () => {
        if (closeHelper) {
            setHelperDisplay(true)
        }
        else {
            setScenarioIndex(scenarioIndex + 1)
        }
    }

    const Event2 = () => {
        if (scenarioIndex === 5) {
            setScenarioIndex(scenarioIndex + 1)
        }
        else if (redirect) {
            setRedirect(true)
        }
            setScenarioIndex(3);
      }
    

    const helperProps = {
        id: scenarioIndex,
        avatar: helper1,
        scenario: scenarios[scenarioIndex],
        inputDisplay: showInput,
        btn1Event: Event1,
        btn2Event: Event2,
        redirect: redirect,
        
      }

    return (
        <SageContainer>
            <SageBg>
            {/* {!helperDisplay && (
                <Helper
                    props={helperProps}
                />
                )} */}
            </SageBg>
        </SageContainer>
    )
}