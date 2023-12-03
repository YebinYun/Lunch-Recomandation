import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import ResultModal from "../../components/modal/ResultModal";
import BlogModal from "../../components/modal/BlogModal";
import { useLocation } from "react-router-dom"; // useNavigate로 전달한 쿼리파라미터값(uri)을 사용하기 위한 훅
import "slick-carousel/slick/slick.css"; // 가로스크롤 캐러셀 구현을 위한 css
import "slick-carousel/slick/slick-theme.css"; // 가로스크롤 캐러셀 구현을 위한 css
import Slider from "react-slick"; // 가로스크롤 캐러셀 구현을 위한 컴포넌트
import HomepageContainer from "../layout/HomepageContainer";

const PUBLIC = process.env.PUBLIC_URL;
// 추천식당 창
const RecomandationWrap = styled.div`
  background-color: #ffe9da;
  border-radius: 25px;
  border-end-end-radius: 0px;
  border-end-start-radius: 0px;
  border: 3px solid #000;
  width: 600px;
  margin: 20px 0;
  position: relative;
`;

// 추천 음식
const TopWrap = styled.div`
  border-bottom: 3px solid #000;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    font-size: 2rem;
  }
`;

// 슬라이터 Container
const SliderContainer = styled.div`
  margin: auto;
  padding-bottom: 20px;
  height: 260px;
`;
// 슬라이더 Wrap
const StyledSlider = styled(Slider)`
  height: 300px;
  padding: 10px 5px;
  margin-left: 20px;
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
  .slick-slide div:focus-visible {
    outline: none;
  }
  .slick-list {
    border-radius: 10px;
    padding: 0;
    > div {
      display: flex;
      margin: 0;
      > div {
        margin-right: 20px;
      }
    }
  }
  // 슬라이더 이미지
  .slick-slide img {
    width: 260px;
    height: 240px;
    margin: 0px;
    border-radius: 10px;
    border: 3px solid black;
  }
  // 하단 순서 버튼
  .slick-dots {
    bottom: 15px;
    margin: 0px;
  }
`;

const settings = {
  dots: true, // 하단 동그라미 버튼
  arrows: false, // 양 옆 화살표 버튼
  infinite: true, // 무한 반복
  speed: 600, // 넘어갈 때 속도
  slidesToShow: 2, // 한 번에 볼 수 있는 슬라이드 개수
  slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 수
  autoplay: false, // 자동 슬라이드
  centerMode: false, // 가운데 맞춤 모드
  cssEase: "ease",
};

// 추천 정보
const InformationWrap = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  > h1 {
    font-size: 1.8rem;
    padding-bottom: 10px;
  }
  > p {
    font-size: 1.2rem;
  }
  > div {
    font-size: 1.2rem;
  }
  .InformationText {
    height: 25px;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    margin: 10px;
    > a {
      width: 430px;
      padding-left: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      &:link {
        color: black;
      }
      &:hover {
        font-weight: bold;
      }
      &:visited {
        color: black;
      }
    }
    > span {
      color: #777;
      margin-left: 1rem;
    }
    > h4 {
      white-space: nowrap;
      font-weight: normal;
    }
  }
  .address1 {
    line-height: 1.8rem;
  }
  .address2 {
    width: 430px;
    height: 25px;
    line-height: 1.8rem;
    margin-left: 1rem;
  }
`;

// 상세 보기
const ViewDetails = styled.div`
  border-radius: 10px;
  border: 3px solid #000;
  height: 60px;
  width: 500px;
  background: #f2c198;
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 47px 20px 47px;
  cursor: pointer;
  &:hover {
    background: #cd9f79;
  }
`;

const NoImgMsg = styled.img`
  width: 200px;
  height: 200px;
`;

const ResultPage = () => {
  // axios로 받은 검색 데이터를 저장해두는 상태
  const [data, setData] = useState([]);
  // 검색결과 데이터중 1번째 추천음식점 이미지를 저장해두는 useState
  const [image1, setImage1] = useState([]);
  // 검색결과 데이터중 2번째 추천음식점 이미지를 저장해두는 useState
  const [image2, setImage2] = useState([]);
  // useNavigate로 전달한 쿼리파라미터의 값(uri)의 값을 활용하기 위한 변수선언
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const food = searchParams.get("food");
  const inputValue = searchParams.get("inputValue");

  // 검색결과 5개중 랜덤으로 2개를 뽑기 위한 함수
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/v1/search/local.json", {
          params: {
            query: `서울 ${inputValue} ${food} `,
            display: 5,
          },
          headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
          },
        });
        const randomItems = getRandomItems(response.data.items, 2);

        // 받아온 데이터의 일부 title가 <b>,</b>를 포함하기에, 해당 값을 제거하기 위한 코드
        console.log(response);
        const modifiedItems = randomItems.map((item) => {
          let str = item.title;
          str = str.replace(/<\/?b>/g, "");
          return { ...item, title: str };
        });
        setData(modifiedItems);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchData();
  }, []);

  // 이미지를 받아오는 API의 쿼리에 검색 API결과가 필요하기 때문에,
  // 검색 API가 실행된 후 실행하기 위해 data(검색api 결과)가 변동이 있을때 이미지 API실행
  useEffect(() => {
    // 첫번째(data[0] 검색결과 이미지를 받아오는 API
    const imageData1 = async () => {
      try {
        const response = await axios.get("/v1/search/image", {
          params: {
            query: `${data[0].title}${food}`,
            display: 100,
          },
          headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
          },
        });
        console.log(response);

        setImage1(response.data.items);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    // 두번째(data[1] 검색결과 이미지를 받아오는 API
    const imageData2 = async () => {
      try {
        const response = await axios.get("/v1/search/image", {
          params: {
            query: `${data[1].title}${food}`,
            display: 100,
          },
          headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
          },
        });
        console.log(response);

        setImage2(response.data.items);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    imageData1();
    imageData2();
  }, [data]);

  // 첫번째 음식점 블로그 api받아오는 코드
  const [blogData1, setblogData1] = useState();
  useEffect(() => {
    const fetchblogData1 = async () => {
      try {
        const response = await axios.get("/v1/search/blog.json", {
          params: {
            query: `${data[0].title} 내돈내산`,
            display: 4,
          },
          headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
          },
        });
        // title <br>,</br> 문자열 필터링 로직 추가
        const responseData = response.data.items.map((item) => {
          let str = item.title;
          str = str.replace(/<\/?b>/g, "");
          return { ...item, title: str };
        });

        setblogData1(responseData);
        console.log(response);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchblogData1();
  }, [image1]);

  // 두번째 음식점 블로그 api받아오는 코드
  const [blogData2, setblogData2] = useState();
  useEffect(() => {
    const fetchblogData2 = async () => {
      try {
        const response = await axios.get("/v1/search/blog.json", {
          params: {
            query: `${data[1].title} 내돈내산`,
            display: 4,
          },
          headers: {
            "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
            "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
          },
        });

        // title <br>,</br> 문자열 필터링 로직 추가
        const responseData = response.data.items.map((item) => {
          let str = item.title;
          str = str.replace(/<\/?b>/g, "");
          return { ...item, title: str };
        });

        setblogData2(responseData);
        console.log(response);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    fetchblogData2();
  }, [image2]);

  // 지역구 모달창
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // 상세보기 음식점1 모달창
  const [showReview, setShowReview] = useState(false);
  // 상세보기 음식점2 모달창
  const [showReview2, setShowReview2] = useState(false);

  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const openReview = (index) => {
    if (index === 0) {
      setShowReview(true);
    } else if (index === 1) {
      setShowReview2(true);
    }
    setSelectedModalIndex(index);
  };

  const closeReview = () => {
    setShowReview(false);
    setShowReview2(false);
  };

  return (
    <>
      {/* 데이터 불러오기전 분기*/}
      {data.length > 0 && image1.length > 0 ? (
        <HomepageContainer>
          {/* 모달창 띄우는 곳*/}
          {showModal ? (
            <ResultModal openModal={openModal} closeModal={closeModal} />
          ) : (
            ""
          )}

          {/* 메인창 */}
          <div style={{display:"flex"}}>
            {/* 추천 창 1 */}
            {data.map((recommendation, index) => (
              <RecomandationWrap key={index}>
                <TopWrap>
                  <h1>
                    (추천 {index + 1}) {recommendation.category}
                  </h1>
                </TopWrap>
                <SliderContainer>
                  <StyledSlider {...settings}>
                    {index === 0 &&
                      (image1
                        .filter((item) => item.title.includes("맛집"))
                        .filter((item) => !item.thumbnail.includes("output"))
                        .filter((item) => !item.thumbnail.includes("cyworld"))
                        .slice(0, 5).length > 1 ? (
                        image1
                          .filter((item) => item.title.includes("맛집"))
                          .filter((item) => !item.thumbnail.includes("output"))
                          .filter((item) => !item.thumbnail.includes("cyworld"))
                          .slice(0, 5)
                          .map((item, index) => (
                            <div key={index}>
                              <img src={item.thumbnail} alt="Thumbnail" />
                            </div>
                          ))
                      ) : (
                        <div>
                          <NoImgMsg
                            src={`${PUBLIC}/images/getReplaceResult.gif`}
                            alt=""
                          />
                        </div>
                      ))}

                    {/* 2번째 음식점 사진 랜더링 */}
                    {index === 1 &&
                      (image2
                        .filter((item) => item.title.includes("맛집"))
                        .filter((item) => !item.thumbnail.includes("output"))
                        .filter((item) => !item.thumbnail.includes("cyworld"))
                        .slice(0, 5).length > 1 ? (
                        image2
                          .filter((item) => item.title.includes("맛집"))
                          .filter((item) => !item.thumbnail.includes("output"))
                          .filter((item) => !item.thumbnail.includes("cyworld"))
                          .slice(0, 5)
                          .map((item, index) => (
                            <div key={index}>
                              <img src={item.thumbnail} alt="Thumbnail" />
                            </div>
                          ))
                      ) : (
                        <div>
                          <NoImgMsg
                            src={`${PUBLIC}/images/getReplaceResult.gif`}
                            alt=""
                          />
                        </div>
                      ))}
                  </StyledSlider>
                </SliderContainer>

                <InformationWrap>
                  <h1 className="InformationText"> {recommendation.title} </h1>
                  <p className="InformationText">
                    <h4>사이트 :</h4>
                    {recommendation.link ? (
                      <a
                        target="_blank"
                        href={recommendation.link}
                        rel="noreferrer">
                        {recommendation.link}
                      </a>
                    ) : (
                      <span>
                        {recommendation.title}은 사이트를 제공하고 있지
                        않습니다.
                      </span>
                    )}
                  </p>
                  <div className="InformationText">
                    <div className="address1">주소 :</div>{" "}
                    <div className="address2">{recommendation.roadAddress}</div>
                  </div>
                </InformationWrap>

                <ViewDetails
                  onClick={() => {
                    openReview(index);
                  }}>
                  <h1> 상세보기 </h1>
                </ViewDetails>

                {/* 상세보기 띄우는 곳*/}
                {showReview || showReview2 ? (
                  <BlogModal
                    openReview={openReview}
                    closeReview={closeReview}
                    blogData1={blogData1}
                    blogData2={blogData2}
                    data={data}
                    selectedModalIndex={selectedModalIndex}
                  />
                ) : (
                  ""
                )}
              </RecomandationWrap>
            ))}
          </div>
          {/* 메인창 끝 */}
        </HomepageContainer>
      ) : (
        <div>데이터를 불러오는 중입니다..</div>
      )}
    </>
  );
};

export default ResultPage;
