import React, { useState, useRef } from "react";
import RollContainer from "../RollContainer";
import styled, { keyframes } from "styled-components";
import { PUBLIC_FOOD_IMAGE } from "../../assets/images/images";

const RandomClick = ({ setFood1, setFood2, setFood3, buttonClickHandler }) => {
  const foods = [
    [
      PUBLIC_FOOD_IMAGE.koreanFood1,
      PUBLIC_FOOD_IMAGE.chineseFood1,
      PUBLIC_FOOD_IMAGE.westernFood1,
      PUBLIC_FOOD_IMAGE.japaneseFood1,
      PUBLIC_FOOD_IMAGE.schoolFood1,
    ],
    [
      PUBLIC_FOOD_IMAGE.koreanFood2,
      PUBLIC_FOOD_IMAGE.chineseFood2,
      PUBLIC_FOOD_IMAGE.westernFood2,
      PUBLIC_FOOD_IMAGE.japaneseFood2,
      PUBLIC_FOOD_IMAGE.schoolFood2,
    ],
    [
      PUBLIC_FOOD_IMAGE.koreanFood3,
      PUBLIC_FOOD_IMAGE.chineseFood3,
      PUBLIC_FOOD_IMAGE.westernFood3,
      PUBLIC_FOOD_IMAGE.japaneseFood3,
      PUBLIC_FOOD_IMAGE.schoolFood3,
    ],
  ];
  const slotRefs = [useRef(null), useRef(null), useRef(null)];
  const [rolling, setRolling] = useState(false);

  // 실제 각 슬롯이 돌아가게 만들어주는 함수
  const triggerSlotRotation = (slotRef, slotIndex, foods) => {
    function setTop(top) {
      slotRef.current.style.top = `${top}px`;
    }
    const options = slotRef.current.children;
    const filteredFoods = foods[slotIndex];
    const randomOption = Math.floor(Math.random() * filteredFoods.length);
    const chosenOption = options[randomOption];
    setTop(-chosenOption.offsetTop + 1);
    return filteredFoods[randomOption];
  };

  // 룰렛 클릭했을때 실행되는 함수
  const roll = () => {
    const totalRotations = 10; // 롤링횟수
    setRolling(true); // rolling 상태를 true로 바꿔줌
    const rotationInterval = setInterval(() => {
      // 슬롯 1,2,3 을돌며 triggerSlotRotation(실제 슬롯1,2,3가 움직이게 하는 함수 리턴값은 각 슬롯 배열안의 음식물임)
      slotRefs.forEach((slotRef, i) => {
        const selected = triggerSlotRotation(slotRef, i, foods);
        if (i === 0) {
          // 첫번째 슬롯의 음식 인덱스를 저장해두고
          // 두번째, 세번째 슬롯의 인덱스를 첫번째 슬롯인덱스와 일치시켜 같은 음식이 나오도로감
          const foodIndex = foods[0].indexOf(selected);
          setFood1(selected);
          setFood2(foods[1][foodIndex]);
          setFood3(foods[2][foodIndex]);
        }
      });
    }, 500);

    setTimeout(() => {
      clearInterval(rotationInterval);
      setRolling(false);
      // 슬롯 다돌고 결과 모달이 뜨기 전까지 delay를 주기 위한 코드
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
  0% {
    color: #000;
  }
  49% {
    color: #000;
  }
  60% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
  100% {
    color: #000;
  }
`;
const GameContainer = styled.div`
  width: 15vw;
  height: 10vh;
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
