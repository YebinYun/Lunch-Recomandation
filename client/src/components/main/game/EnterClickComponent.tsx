import React from "react";
import styled, { keyframes } from "styled-components";
import RollContainer from "./RandomButton.jsx";

type props = {
  rolling: boolean;
  roll: React.MouseEventHandler<HTMLDivElement>;
};

const EnterClickComponent = ({ rolling, roll }:props) => {
  return (
    <GameContainer>
      <RollContainer rolling={rolling} roll={roll} />
    </GameContainer>
  );
};

const blinkingText = keyframes`
  0%, 49%, 100% {
    color: #000;
  }
  60%, 99% {
    color: transparent;
  }
`;
const GameContainer = styled.div`
  background: #f9b2a6;
  width: 18vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4rem;
  font-size: 1.5rem;
  border: solid 3px black;
  border-radius: 15px;
  animation: ${blinkingText} 1.3s ease infinite;
  cursor: pointer;
  &:active {
    box-shadow: inset -5px -5px 5px rgba(225, 225, 225, 0.5),
      inset 8px 0px 16px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    background-color: #ea8573;
    transition: 0.5s;
  }
`;

export default EnterClickComponent;
