import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../layout/ModalContainer.jsx";
import { foodCountry } from "../../utils/foods/foods.tsx";

const ResultModal = ({
  inputValue,
  resultFoods,
  result,
  openModalHandler,
  colorChange,
}) => {
  const tittleFood = Object.keys(foodCountry).filter(
    (country) => foodCountry[country][0] === resultFoods
  );
  const iconFood = foodCountry[tittleFood];
  const navigate = useNavigate();
  const viewResults = () => {
    navigate(
      `/Recomandation?inputValue=${encodeURIComponent(
        inputValue
      )}&food=${encodeURIComponent(tittleFood)}`
    );
  };

  return (
    <ModalContainer
      modalClickHandler={openModalHandler}
      colorChange={colorChange}>
      <ResultContainer>
        <ResultTitle>
          {tittleFood && result ? (
            <h1>오늘은 {tittleFood}!</h1>
          ) : (
            <h1>음식을 추천중입니다...</h1>
          )}
        </ResultTitle>
        <ResultIcon>
          {iconFood.map((icon) => (
            <img src={icon} alt={`${tittleFood} 아이콘`} />
          ))}
        </ResultIcon>
        <ResultButton onClick={viewResults}>
          <p> 구경가기 </p>
        </ResultButton>
      </ResultContainer>
    </ModalContainer>
  );
};

const ResultContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > span {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 0;
    cursor: pointer;
  }
`;

const ResultTitle = styled.div`
  & h1 {
    font-size: 2.5rem;
    letter-spacing: 1.2rem;
  }
`;

const ResultIcon = styled.div`
  display: flex;
  & img {
    margin: 3rem;
  }
`;

const ResultButton = styled.button`
  background-color: #f9b2a6;
  border: 3px solid black;
  border-radius: 15px;
  & p {
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.8rem;
  }
  &:hover {
    background-color: #ea8573;
    transition: 0.7s;
    cursor: pointer;
  }
`;

export default ResultModal;
