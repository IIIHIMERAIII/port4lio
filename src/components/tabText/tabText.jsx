import React, { useEffect, useRef } from "react";
import { Button } from "../button/button";
import {TitleWrapper, Title, ButtonWrapper} from "./styled";

export const TabText = ({ text }) => {
  // Create a ref to hold the TypeIt instance
  const typeItRef = useRef();

  useEffect(() => {
    // Clean up the TypeIt instance when the component unmounts
    return () => {
      // Check if typeItRef.current is defined before attempting to destroy
      if (typeItRef.current) {
        typeItRef.current.destroy();
      }
    };
  }, []);

  return (
    <TitleWrapper className="visible">
      {/* Use TypeIt component to render the typing effect */}
      <Title
        id="tabText"
        options={{ strings: [text], speed: 8, loop: false }}
        // Assign the TypeIt instance to the ref
        getInstance={(instance) => {
          typeItRef.current = instance;
        }}
      />
        <ButtonWrapper>
            <Button
              title='Close'
             />
                <Button
              title='Apply'
             />
        </ButtonWrapper>
    </TitleWrapper>
  );
};