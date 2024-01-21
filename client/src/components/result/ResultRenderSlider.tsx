import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; // 가로스크롤 캐러셀 구현을 위한 css
import "slick-carousel/slick/slick-theme.css"; // 가로스크롤 캐러셀 구현을 위한 css
import Slider from "react-slick"; // 가로스크롤 캐러셀 구현을 위한 컴포넌트
import { PUBLIC_LOADING_IMAGE } from "../../utils/images/images.tsx";

type Props = {
  index: number;
  images: any[]; 
}

const ResultRenderSlider = ({ index, images }:Props) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);
  
  return (
    <>
      <StyledSlider {...settings}>
        {images && images[index] && images[index].length > 1 ? (
          images[index]
            .filter((item: any) => item.title.includes("맛집"))
            .filter((item: any) => !item.thumbnail.includes("output"))
            .filter((item: any) => !item.thumbnail.includes("cyworld"))
            .slice(0, 5)
            .map((item: any, idx: number) => (
              <div key={idx}>
                <img
                  src={
                    isImgError
                      ? PUBLIC_LOADING_IMAGE.resultLoading
                      : item.thumbnail
                  }
                  alt="Thumbnail"
                  onError={() => setIsImgError(true)}
                />
              </div>
            ))
        ) : (
          <div>
            <NoImg src={PUBLIC_LOADING_IMAGE.resultLoading} alt="" />
          </div>
        )}
      </StyledSlider>
    </>
  );
};

export default ResultRenderSlider;

const StyledSlider = styled(Slider)`
  padding: 1rem 0;
  & .slick-slide div {
    width: 18rem;
    cursor: pointer;
    outline: none;
  }
  & .slick-list {
    margin: 0 2rem;
    border-radius: 15px;
    & div {
      display: flex;
      justify-content: center;
    }
  }
  // 슬라이더 이미지
  & .slick-slide img {
    margin: 0 4rem;
    height: 12.5rem;
    width: 12.5rem;
    border-radius: 10px;
    border: 3px solid black;
  }
`;

const settings = {
  dots: true, // 하단 동그라미 버튼
  arrows: false, // 양 옆 화살표 버튼
  infinite: true, // 무한 반복
  slidesToShow: 1.6, // 한 번에 볼 수 있는 슬라이드 개수
  slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 수
  autoplay: false, // 자동 슬라이드
  centerMode: true, // 가운데 맞춤 모드
  cssEase: "ease",
};

const NoImg = styled.img`
  width: 100%;
  height: 100%;
`;
