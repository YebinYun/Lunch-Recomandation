import React from "react";
import styled from "styled-components";
import BlogModal from "../result/BlogModal.js";
import HomepageContainer from "../../containers/layout/HomepageContainer.tsx";
import ResultRenderSlider from "./ResultRenderSlider.tsx";
import ResultInformation from "./ResultInformation.tsx";

type Props = {
  data: any[]; 
  image: [any[], any[]]; 
  blogData: Record<number, any[]>; 
  showModal: boolean;
  showReview: boolean;
  selectedModalIndex: number | null;
  openModalHandler: () => void;
  toggleReview: (index: number) => void;
  colorChange: any;
}

const ResultComponent = ({
  data,
  image,
  blogData,
  showModal,
  showReview,
  selectedModalIndex,
  openModalHandler,
  toggleReview,
  colorChange,
}: Props) => {
  return (
    <>
      {data.length > 0 && image.length > 0 ? (
        <HomepageContainer>
          <div style={{ display: "flex" }}>
            {data.map((recommendation, index) => (
              <TitleContainer key={index}>
                <TitleText>
                  (추천 {index + 1}) {recommendation.category}
                </TitleText>
                <ResultRenderSlider index={index} images={image} />
                <ResultInformation
                  recommendation={recommendation}
                  toggleReview={toggleReview}
                  index={index}
                />
                {/* 상세보기 띄우는 곳*/}
                {showReview && (
                  <BlogModal
                    toggleReview={toggleReview}
                    blogData={blogData}
                    data={data}
                    selectedModalIndex={selectedModalIndex}
                  />
                )}
              </TitleContainer>
            ))}
          </div>
        </HomepageContainer>
      ) : (
        <div>데이터를 불러오는 중입니다..</div>
      )}
    </>
  );
};

export default ResultComponent;

const TitleContainer = styled.div`
  position: relative;
  width: 37vw;
  height: 75vh;
  min-height: 600px;
  background-color: #ffe9da;
  border: 3px solid black;
  border-radius: 25px;
  margin: 0 1rem;
`;

const TitleText = styled.h1`
  border-bottom: 3px solid black;
  padding: 1rem 0;
  font-size: 1.5rem;
`;
