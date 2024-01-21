import React, { MutableRefObject, SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import HomepageContainer from "../../containers/layout/HomepageContainer.tsx";
import RandomGame from "./game/RandomGame.jsx";
import EnterClickContainer from "../../containers/main/game/EnterClickContainer.tsx";
import EnterLocalComponent from "./game/EnterLocalComponent.tsx";
import EnterDistrictContainer from "../../containers/main/game/EnterDistrictContainer.tsx";
import ResultModal from "../layout/modal/ResultModal.jsx";

type props = {
  resultFoods: string[];
  setResultFood: Dispatch<SetStateAction<string[]>>;
  result: boolean;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  slotRefs: MutableRefObject<HTMLDivElement>[];
  buttonClickHandler: () => void;
  colorChange: any;
};

const MainPage = ({
  resultFoods,
  setResultFood,
  result,
  inputValue,
  setInputValue,
  slotRefs,
  buttonClickHandler,
  colorChange,
}: props) => {
  return (
    <HomepageContainer>
      <TitleContainer>
        <h1> 오늘 뭐 먹지? </h1>
        <h3> 메뉴 추천 룰렛 </h3>
      </TitleContainer>
      <MainContainer>
        <RandomGame slotRefs={slotRefs} />
        <RandomContainer>
          <EnterLocalComponent/>
          <EnterClickContainer
            setResultFood={setResultFood}
            slotRefs={slotRefs}
            buttonClickHandler={buttonClickHandler}
          />
          <EnterDistrictContainer
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </RandomContainer>
      </MainContainer>
      {result && (
        <ResultModal
          inputValue={inputValue}
          resultFoods={resultFoods}
          result={result}
          openModalHandler={buttonClickHandler}
          colorChange={colorChange}
        />
      )}
    </HomepageContainer>
  );
};

const TitleContainer = styled.div`
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
const MainContainer = styled.div`
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
