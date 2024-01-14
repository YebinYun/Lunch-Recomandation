import axios from "axios";
import styled from "styled-components";
import ResultModal from "../../components/modal/MapModal";
import React, { useState, useEffect } from "react";
import BlogModal from "../../components/modal/BlogModal";
import { useLocation } from "react-router-dom"; // useNavigate로 전달한 쿼리파라미터값(uri)을 사용하기 위한 훅
import HomepageContainer from "../layout/HomepageContainer";
import ResultRenderSlider from "../../components/recomandation/ResultRenderSlider";
import ResultInformation from "../../components/recomandation/ResultInformation";

const Recomandation = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([[], []]);
  const [blogData, setBlogData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const food = searchParams.get("food");
  const inputValue = searchParams.get("inputValue");

  const openModalHandler = () => {
    setShowModal(!showModal);
  };

  const toggleReview = (index) => {
    setShowReview((prevShowReview) => !prevShowReview);
    setSelectedModalIndex(index);
  };

  // 검색결과 5개중 랜덤으로 2개를 뽑기 위한 함수
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/naver/search",
          {
            params: {
              query: `${inputValue} ${food} `,
            },
          }
        );
        console.log(response);
        const randomItems = getRandomItems(response.data.items, 2);

        // 받아온 데이터의 일부 title가 <b>,</b>를 포함하기에, 해당 값을 제거하기 위한 코드

        console.log("성공");
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
    const imageData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get("http://localhost:8000/naver/search", {
            params: {
              query: `${data[0].title}${food}`,
            },
          }),
          axios.get("http://localhost:8000/naver/image", {
            params: {
              query: `${data[1].title}${food}`,
            },
          }),
        ]);

        setImage([response1.data.items, response2.data.items]);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    imageData();
  }, [data]);

  useEffect(() => {
    const fetchBlogData = async (index) => {
      try {
        const response = await axios.get("http://localhost:8000/naver/blog", {
          params: {
            query: `${data[index].title} 내돈내산`,
          },
        });

        // title <br>,</br> 문자열 필터링 로직 추가
        const responseData = response.data.items.map((item) => {
          let str = item.title;
          str = str.replace(/<\/?b>/g, "");
          return { ...item, title: str };
        });

        setBlogData((prevData) => ({
          ...prevData,
          [index]: responseData,
        }));

        console.log(response);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      }
    };

    if (image[0].length > 0) {
      fetchBlogData(0);
    }
    if (image[1].length > 0) {
      fetchBlogData(1);
    }
  }, [image, data]);

  return (
    <>
      {data.length > 0 && image.length > 0 ? (
        <HomepageContainer>
          <div style={{ display: "flex" }}>
            {data.map((recommendation, index) => (
              <RecomandationWrap key={index}>
                <TitleCategory>
                  (추천 {index + 1}) {recommendation.category}
                </TitleCategory>
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
              </RecomandationWrap>
            ))}
          </div>
        </HomepageContainer>
      ) : (
        <div>데이터를 불러오는 중입니다..</div>
      )}
      {showModal && <ResultModal openModal={openModalHandler} />}
    </>
  );
};

export default Recomandation;

const RecomandationWrap = styled.div`
  position: relative;
  width: 37vw;
  height: 75vh;
  min-height:600px;
  background-color: #ffe9da;
  border: 3px solid black;
  border-radius: 25px 25px 0 0;
  margin: 0 1rem;
`;

const TitleCategory = styled.h1`
  border-bottom: 3px solid black;
  padding: 1rem 0;
  font-size: 1.5rem;
`;
