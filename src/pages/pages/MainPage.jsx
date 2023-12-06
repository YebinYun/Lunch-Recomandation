import React, { useState, useRef } from "react";
import styled from "styled-components";
import HomepageContainer from "../layout/HomepageContainer";
import RandomGame from "../../components/game/RandomGame";
import EnterClick from "../../components/game/EnterClick";
import EnterLocal from "../../components/game/EnterLocal";
import EnterDistrict from "../../components/game/EnterDistrict";
import ResultModal from "../../components/modal/ResultModal";
import { deselectedOptions } from "../../utils/dummy/deselectedOptions";
import { foods } from "../../utils/dummy/foods";
import { PUBLIC_FOOD_IMAGE } from "../../assets/images/images";

const MainPage = ({ colorChange }) => {
  const [resultFoods, setResultFood] = useState([
    PUBLIC_FOOD_IMAGE.koreanFood1,
    PUBLIC_FOOD_IMAGE.koreanFood2,
    PUBLIC_FOOD_IMAGE.koreanFood3,
  ]);

  const slotRefs = [useRef(null), useRef(null), useRef(null)];
  const [result, setResult] = useState(false);
  const buttonClickHandler = () => {
    setResult(!result);
  };
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  return (
    <HomepageContainer>
      <TitleWrap>
        <h1> 오늘 뭐 먹지? </h1>
        <h3> 메뉴 추천 룰렛 </h3>
      </TitleWrap>
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
          <EnterClick
            setResultFood={setResultFood}
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
          resultFoods={resultFoods}
          result={result}
          buttonClickHandler={buttonClickHandler}
          colorChange={colorChange}
        />
      )}
    </HomepageContainer>
  );
};

const TitleWrap = styled.div`
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
    font-weight: 100;
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
