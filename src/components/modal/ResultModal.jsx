import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PUBLIC_FOOD_IMAGE } from "../../assets/images/images";
import ModalContainer from "../../pages/layout/ModalContainer";
import { foodCountry } from "../../utils/dummy/foods";

const ResultModal = ({
  inputValue,
  resultFoods,
  result,
  buttonClickHandler,
}) => {
  let food = "";
  let foodImageName = [];

  // const titlteFood = Object.keys(foodCountry).find((key) => {
  //   // foodCountry[key] === resultFood;
  //   console.log(
  //     "//foodCountry// : ",
  //     foodCountry[key][0],
  //     "//resultFoods// : ",
  //     resultFoods
  //   );
  // });

  // 오늘은 OO!
  const tittleFood = Object.keys(foodCountry).filter(
    (country) => foodCountry[country][0] === resultFoods
  )[0];

  // // switch (true) {
  //   case resultFoods.includes("korean"):
  //     food = Object.keys(foodCountry)[0];
  //     foodImageName = [
  //       PUBLIC_FOOD_IMAGE.koreanFood1,
  //       PUBLIC_FOOD_IMAGE.koreanFood2,
  //       PUBLIC_FOOD_IMAGE.koreanFood3,
  //     ];
  //     break;
  //   case resultFoods.includes("chinese"):
  //     food = Object.keys(foodCountry)[1];
  //     foodImageName = [
  //       PUBLIC_FOOD_IMAGE.chineseFood1,
  //       PUBLIC_FOOD_IMAGE.chineseFood2,
  //       PUBLIC_FOOD_IMAGE.chineseFood3,
  //     ];
  //     break;
  //   case resultFoods.includes("western"):
  //     food = "양식";
  //     foodImageName = [
  //       PUBLIC_FOOD_IMAGE.westernFood1,
  //       PUBLIC_FOOD_IMAGE.westernFood2,
  //       PUBLIC_FOOD_IMAGE.westernFood3,
  //     ];
  //     break;
  //   case resultFoods.includes("japanese"):
  //     food = "일식";
  //     foodImageName = [
  //       PUBLIC_FOOD_IMAGE.japaneseFood1,
  //       PUBLIC_FOOD_IMAGE.japaneseFood2,
  //       PUBLIC_FOOD_IMAGE.japaneseFood3,
  //     ];
  //     break;
  //   case resultFoods.includes("school"):
  //     food = "분식";
  //     foodImageName = [
  //       PUBLIC_FOOD_IMAGE.schoolFood1,
  //       PUBLIC_FOOD_IMAGE.schoolFood2,
  //       PUBLIC_FOOD_IMAGE.schoolFood3,
  //     ];
  //     break;
  //   default:
  //     food = null;
  //     foodImageName = null;
  //     break;
  // }
  const navigate = useNavigate();
  const viewResults = () => {
    navigate(
      `/Recomandation?inputValue=${encodeURIComponent(
        inputValue
      )}&food=${encodeURIComponent(tittleFood)}`
    );
  };

  return (
    <ModalContainer modalClickHandler={buttonClickHandler}>
      <ResultContainer>
        <ResultTitle>
          {tittleFood && result ? (
            <h1>오늘은 {tittleFood}!</h1>
          ) : (
            <h1>음식을 추천중입니다...</h1>
          )}
        </ResultTitle>
        <ResultIcon>
          <img src={foodImageName[0]} alt="음식 아이콘" />
          <img src={foodImageName[1]} alt="음식 아이콘" />
          <img src={foodImageName[2]} alt="음식 아이콘" />
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
