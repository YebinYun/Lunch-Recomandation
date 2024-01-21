import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import RollContainer from "./RandomButton.jsx";
import RotateSlot from "../../../hook/RotateSlot.js";
import { foods } from "../../../utils/foods/foods.tsx";

const EnterClick = ({ setResultFood, buttonClickHandler, slotRefs }) => {
  const [rolling, setRolling] = useState(false);
  const rollingFoods = RotateSlot;

  useEffect(() => {
    if (!rolling) {
      const slot1Top = slotRefs[0].current.style.top;
      const slot3Top = `calc(${slot1Top} - 5px)`;
      slotRefs[2].current.style.top = slot3Top;
      slotRefs.slice(1, 2).forEach((slotRef) => {
        slotRef.current.style.top = slot1Top;
      });
    }
  }, [rolling, slotRefs]);

  // 룰렛 클릭했을때 실행되는 함수
  const roll = () => {
    const totalRolling = 10;
    setRolling(true);
    const rollingInterval = setInterval(() => {
      slotRefs.forEach((slotRef, i) => {
        const selected = rollingFoods(slotRef, i, foods);
        if (i === 0) {
          setResultFood(selected);
        }
      });
    }, 500);
    setTimeout(() => {
      // 슬롯 다돌고 결과 모달이 뜨기 전까지 delay를 주기 위한 코드
      clearInterval(rollingInterval);
      setRolling(false);
      setTimeout(() => {
        buttonClickHandler();
      }, 800);
    }, totalRolling * 400);
  };

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

export default EnterClick;
