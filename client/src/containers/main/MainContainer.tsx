import React, { MutableRefObject, useRef, useState } from 'react'
import MainComponent from "../../components/main/MainComponent.tsx"
import { PUBLIC_FOOD_IMAGE } from "../../utils/images/images.tsx";

type props = {
  colorChange:string;
};

const MainContainer = ({ colorChange }: props) => {
  const [result, setResult] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [resultFoods, setResultFood] = useState<string[]>([
    PUBLIC_FOOD_IMAGE.koreanFood1,
    PUBLIC_FOOD_IMAGE.koreanFood2,
    PUBLIC_FOOD_IMAGE.koreanFood3,
  ]);
  const slotRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const buttonClickHandler = () => {
    setResult(!result);
  };

  return (
    <>
      <MainComponent
        resultFoods={resultFoods}
        setResultFood={setResultFood}
        result={result}
        inputValue={inputValue}
        setInputValue={setInputValue}
        slotRefs={slotRefs as MutableRefObject<HTMLDivElement>[]}
        buttonClickHandler={buttonClickHandler}
        colorChange={colorChange}
      />
    </>
  );
};

export default MainContainer;