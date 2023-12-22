import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ResultModal from "../../components/modal/ResultModal";
import BlogModal from "../../components/modal/BlogModal";
import { useLocation } from "react-router-dom"; // useNavigate로 전달한 쿼리파라미터값(uri)을 사용하기 위한 훅
import HomepageContainer from "../layout/HomepageContainer";
import ResultRenderSlider from "../../components/recomandation/ResultRenderSlider";
import ResultInformation from "../../components/recomandation/ResultInformation";
import getSearch from "../../api/getSearch";
import Error from "../../api/apiErrorHandling";

const ResultPage = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([[], []]);
  const [blogData, setBlogData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const food = searchParams.get("food");
  const inputValue = searchParams.get("inputValue");

  const getEndpoints = () => [
    {
      url: "/search/local.json", // /search/local
      keyword: `서울 ${inputValue} ${food}`,
      num: 5,
    },
    {
      url: "/search/image",
      keyword: `${data[0]?.title}${food}`,
      num: 100,
    },
    {
      url: "/search/blog.json", // /search/blog
      keyword: `${data[0]?.title} 내돈내산`,
      num: 4,
    },
  ];

  // 함수와 변수 이름 정확히..!! 함수는 앞에 동사(get, fetch 등등 , 그리고 반환값(return)값이 있어야 함. 따라서 data와 같은 값을 넣어서 실행될수 있게 작성..

  const fetchData = async (endpoints) => {
    try {
      const responses = await getSearch.get(endpoints);

      const [localSearchResponse, imageSearchResponse, blogSearchResponse] =
        responses;

      const randomItems = getRandomItems(localSearchResponse.items, 2);
      const modifiedItems = randomItems.map((item) => {
        let str = item.title;
        str = str.replace(/<\/?b>/g, "");
        return { ...item, title: str };
      });

      setData(modifiedItems);

      const imageItems = imageSearchResponse.items;
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[0] = imageItems;
        return newImages;
      });

      const blogItems = blogSearchResponse.items.map((item) => {
        let str = item.title;
        str = str.replace(/<\/?b>/g, "");
        return { ...item, title: str };
      });
      setBlogData(blogItems);
    } catch (error) {
      Error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const endpoints = getEndpoints();
      await fetchData(endpoints);
    };

    loadData();
  }, []);

  // 검색결과 5개중 랜덤으로 2개를 뽑기 위한 함수
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const openModalHandler = () => {
    setShowModal(!showModal);
  };

  const toggleReview = (index) => {
    setShowReview((prevShowReview) => !prevShowReview);
    setSelectedModalIndex(index);
  };

  return (
    <>
      {/* 데이터 불러오기전 분기*/}
      {data.length > 0 && images.length > 0 ? (
        <HomepageContainer>
          {/* 메인창 */}
          <div style={{ display: "flex" }}>
            {data.map((recommendation, index) => (
              <RecomandationWrap key={index}>
                <TitleCategory>
                  (추천 {index + 1}) {recommendation.category}
                </TitleCategory>
                <ResultRenderSlider index={index} images={images} />
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
          {/* 메인창 끝 */}
        </HomepageContainer>
      ) : (
        <div>데이터를 불러오는 중입니다..</div>
      )}
      {showModal && <ResultModal openModal={openModalHandler} />}
    </>
  );
};

export default ResultPage;

const RecomandationWrap = styled.div`
  position: relative;
  width: 37vw;
  height: 75vh;
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
