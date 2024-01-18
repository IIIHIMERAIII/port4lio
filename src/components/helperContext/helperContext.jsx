import { useDispatch, useSelector} from 'react-redux';
import { setUserName } from '../../redux/slices/userSlice';

import TypeIt from 'typeit-react';

import { ContextContainer, Input, ContextButton, TypeBox} from "./styled"

export const HelperContext = ({props}) => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.userName)

  const acceptInput = () => {
    if (props.showInput) {
      const inputValue = document.querySelector('#userName').value; // Replace 'inputId' with the actual ID of your input
      dispatch(setUserName(inputValue));
    }
    props.btn1Event();
  };

  console.log(userName)

  return (
    <ContextContainer>
      <TypeBox key={props.id}>
        <TypeIt
          options={{
            speed: 25,
            wait: 1500,
          }}
        > 
          {props.text.replace('{userName}', userName)}
        </TypeIt>
      </TypeBox>
      <>
      {props.inputDisplay && (
        <>
        <Input
          id="userName"
          placeholder='Walter White'
        />
        </>
      ) }
      { props.btn2Context && ( 
          <ContextButton
            to={props.redirect}
            onClick={props.btn2Event}
          >
            2 {props.btn2Context}
          </ContextButton>
        )
      }
      { props.btnContext && ( 
          <ContextButton 
            onClick={props.inputDisplay ? acceptInput : props.btn1Event}
          >
            1 {props.btnContext}
          </ContextButton>
        )
      }
      </>
    </ContextContainer>
  )
}