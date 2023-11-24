import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PUBLIC_FOOD_IMAGE } from "../../assets/images/images";
import ModalContainer from "../../pages/layout/ModalContainer";

const ResultModal = ({ inputValue, food1, result, startClickHandler }) => {
  let food = "";
  let foodImageName = "";
  switch (true) {
    case food1.includes("korean"):
      food = "한식";
      foodImageName = [
        PUBLIC_FOOD_IMAGE.koreanFood1,
        PUBLIC_FOOD_IMAGE.koreanFood2,
        PUBLIC_FOOD_IMAGE.koreanFood3,
      ];
      break;
    case food1.includes("chinese"):
      food = "중식";
      foodImageName = [
        PUBLIC_FOOD_IMAGE.chineseFood1,
        PUBLIC_FOOD_IMAGE.chineseFood2,
        PUBLIC_FOOD_IMAGE.chineseFood3,
      ];
      break;
    case food1.includes("western"):
      food = "양식";
      foodImageName = [
        PUBLIC_FOOD_IMAGE.westernFood1,
        PUBLIC_FOOD_IMAGE.westernFood2,
        PUBLIC_FOOD_IMAGE.westernFood3,
      ];
      break;
    case food1.includes("japanese"):
      food = "일식";
      foodImageName = [
        PUBLIC_FOOD_IMAGE.japaneseFood1,
        PUBLIC_FOOD_IMAGE.japaneseFood2,
        PUBLIC_FOOD_IMAGE.japaneseFood3,
      ];
      break;
    case food1.includes("school"):
      food = "분식";
      foodImageName = [
        PUBLIC_FOOD_IMAGE.schoolFood1,
        PUBLIC_FOOD_IMAGE.schoolFood2,
        PUBLIC_FOOD_IMAGE.schoolFood3,
      ];
      break;
    default:
      food = null;
      foodImageName = null;
      break;
  }
  const navigate = useNavigate();

  const viewResults = () => {
    navigate(
      `/Recomandation?inputValue=${encodeURIComponent(
        inputValue
      )}&food=${encodeURIComponent(food)}`
    );
  };

  return (
    // <ModalBackground>
    //   <Container>
    //     {/* 상단바-1 */}
    //     <TopBarWrap>
    //       {/* 동작 버튼 */}
    //       <AcctionBtnWrap>
    //         {/* 방향키 */}
    //         <AcctionBtn>
    //           <Icon icon="fluent-emoji-high-contrast:right-arrow" rotate={2} />
    //         </AcctionBtn>
    //         <AcctionBtn>
    //           <Icon icon="fluent-emoji-high-contrast:right-arrow" />
    //         </AcctionBtn>
    //       </AcctionBtnWrap>

    //       {/* 동작 버튼 */}
    //       <AcctionBtnWrap>
    //         <AcctionBtn>
    //           <Icon icon="ic:round-minimize" />
    //         </AcctionBtn>
    //         <AcctionBtn>
    //           <Icon icon="ep:close-bold" onClick={startClickHandler} />
    //         </AcctionBtn>
    //       </AcctionBtnWrap>
    //     </TopBarWrap>

    <ModalContainer>
      <ResultContainer>
        <div>
          {food && result ? (
            <h1>오늘은 {food}!</h1>
          ) : (
            <h1>음식을 추천중입니다...</h1>
          )}
        </div>
        <ResultIcon>
          <img src={foodImageName[0]} alt="음식 아이콘" />
          <img src={foodImageName[1]} alt="음식 아이콘" />
          <img src={foodImageName[2]} alt="음식 아이콘" />
        </ResultIcon>
        <div>
          <button onClick={viewResults} food1={food1}>
            추천 보러가기
          </button>
        </div>
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
`;

const ResultIcon = styled.div`
  & img {
    margin: 40px 25px;
  }
`;

export default ResultModal;
