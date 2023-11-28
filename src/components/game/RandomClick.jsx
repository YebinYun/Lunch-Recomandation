import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import RollContainer from "../RollContainer";
import RotateSlot from "../../hook/RotsteSlot";
import { foods } from "../../utils/dummy/foods";

const RandomClick = ({ setFood1, setFood2, setFood3, buttonClickHandler }) => {
  const slotRefs = [useRef(null), useRef(null), useRef(null)];
  const [rolling, setRolling] = useState(false);

  // 실제 각 슬롯이 돌아가게 만들어주는 함수
  const triggerSlotRotation = RotateSlot;

  // 룰렛 클릭했을때 실행되는 함수
  const roll = () => {
    const totalRotations = 10; // 롤링횟수
    setRolling(true); // rolling 상태를 true로 바꿔줌
    const rotationInterval = setInterval(() => {
      // 슬롯 1,2,3을 돌며 triggerSlotRotation (실제 슬롯1,2,3가 움직이게 하는 함수 리턴값은 각 슬롯 배열안의 음식들)
      slotRefs.forEach((slotRef, i) => {
        const selected = triggerSlotRotation(slotRef, i, foods);
        if (i === 0) {
          // 첫번째 슬롯의 음식 i를 저장, 두.세번째 인덱스를 첫번째 슬롯 i와 일치시켜 같은 음식이 나오도로 감
          const foodIndex = foods[0].indexOf(selected);
          setFood1(selected);
          setFood2(foods[1][foodIndex]);
          setFood3(foods[2][foodIndex]);
        }
      });
    }, 500);

    setTimeout(() => {
      // 슬롯 다돌고 결과 모달이 뜨기 전까지 delay를 주기 위한 코드
      clearInterval(rotationInterval);
      setRolling(false);
      setTimeout(() => {
        buttonClickHandler();
      }, 800);
    }, totalRotations * 400);
  };

  return (
    <GameContainer>
      <RollContainer rolling={rolling} roll={roll}>
        <div />
      </RollContainer>
    </GameContainer>
  );
};
const blinkingText = keyframes`
  0%, 49% {
    color: #000;
  }
  60%, 99% {
    color: transparent;
  }
  100% {
    color: #000;
  }
`;

const GameContainer = styled.div`
  width: 18vw;
  height: 12vh;
  margin: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9b2a6;
  animation: ${blinkingText} 1.3s ease infinite;
  font-size: 1.5rem;
  cursor: pointer;
  border: solid 3px black;
  border-radius: 15px;
  &:active {
    box-shadow: inset -5px -5px 5px rgba(225, 225, 225, 0.5),
      inset 8px 0px 16px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    background-color: #ea8573;
    transition: 0.5s;
  }
`;

export default RandomClick;
