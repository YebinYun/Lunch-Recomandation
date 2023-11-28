import React, { useState, useRef } from "react";
import styled from "styled-components";
import HomepageContainer from "../layout/HomepageContainer";
import RandomGame from "../../components/game/RandomGame";
import RandomClick from "../../components/game/EnterClick";
import EnterLocal from "../../components/game/EnterLocal";
import EnterDistrict from "../../components/game/EnterDistrict";
import ResultModal from "../../components/modal/ResultModal";
import { deselectedOptions } from "../../utils/dummy/deselectedOptions";
import { foods } from "../../utils/dummy/foods";
import { PUBLIC_FOOD_IMAGE } from "../../assets/images/images";

const MainPage = () => {
  const [food1, setFood1] = useState(PUBLIC_FOOD_IMAGE.koreanFood1);
  const [food2, setFood2] = useState(PUBLIC_FOOD_IMAGE.koreanFood2);
  const [food3, setFood3] = useState(PUBLIC_FOOD_IMAGE.koreanFood3);
  const slotRefs = [useRef(null), useRef(null), useRef(null)];

  // 슬롯이 다 돌아갔는지를 알려주는 useState
  const [result, setResult] = useState(false);

  const buttonClickHandler = () => {
    setResult(!result);
  };

  // 자동완성 구현
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  return (
    <HomepageContainer>
      <MainTitle>
        <h1> 오늘 뭐 먹지? </h1>
        <h3> 메뉴 추천 룰렛 </h3>
      </MainTitle>

      <MainBody>
        <RandomGame slotRefs={slotRefs} foods={foods} />
        <RandomContainer>
          <EnterLocal
            options={options}
            setOptions={setOptions}
            inputValue={inputValue}
            setInputValue={setInputValue}
            deselectedOptions={deselectedOptions}
          />
          <RandomClick
            setFood1={setFood1}
            setFood2={setFood2}
            setFood3={setFood3}
            slotRefs={slotRefs}
            buttonClickHandler={buttonClickHandler}
          />
          <EnterDistrict
            options={options}
            setOptions={setOptions}
            inputValue={inputValue}
            setInputValue={setInputValue}
            deselectedOptions={deselectedOptions}
          />
        </RandomContainer>
      </MainBody>

      {result && (
        <ResultModal
          inputValue={inputValue}
          food1={food1}
          result={result}
          buttonClickHandler={buttonClickHandler}
        />
      )}
    </HomepageContainer>
  );
};

const MainTitle = styled.div`
  width: 70vw;
  background: linear-gradient(
      177deg,
      rgba(255, 39, 0, 0.38) 0%,
      rgba(234, 133, 115, 0) 100%
    ),
    #fff2e9;
  padding: 1rem 0;
  border: 3px solid black;
  border-radius: 15px;
  & h1 {
    padding-bottom: 1rem;
    color: white;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }
  & h3 {
    color: white;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
    font-weight: 100;
  }
`;

const MainBody = styled.div`
  width: 70vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fbe1d2;
  border: 3px solid black;
  border-radius: 15px;
`;
const RandomContainer = styled.div`
  display: flex;
`;

export default MainPage;
