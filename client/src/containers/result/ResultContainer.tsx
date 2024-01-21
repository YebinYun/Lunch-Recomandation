import React, { useEffect, useState } from 'react'
import ResultComponent from "../../components/result/ResultComponent.tsx"
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ResultContainer = ({ colorChange }:any) => {
  const location = useLocation();
  const [data, setData] = useState<any[]>([]);
  const [image, setImage] = useState<[any[], any[]]>([[],[]]);
  const [blogData, setBlogData] = useState<Record<number, any[]>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(
    null
  );
  const searchParams = new URLSearchParams(location.search);
  const food = searchParams.get("food");
  const inputValue = searchParams.get("inputValue");

  const openModalHandler = () => {
    setShowModal(!showModal);
  };

  const toggleReview = (index:number) => {
    setShowReview((prevShowReview) => !prevShowReview);
    setSelectedModalIndex(index);
  };

  // 검색결과 5개중 랜덤으로 2개를 뽑기 위한 함수
  const getRandomItems = (array:any[], count:number) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://port-0-lunch-recommendation-3wh3o2blrdkem9w.sel5.cloudtype.app/naver/search",
          {
            params: {
              query: `${inputValue} ${food} `,
            },
          }
        );
        const randomItems = getRandomItems(response.data.items, 2);

        // 받아온 데이터의 일부 title가 <b>,</b>를 포함하기에, 해당 값을 제거하기 위한 코드
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 이미지를 받아오는 API의 쿼리에 검색 API결과가 필요하기 때문에,
  // 검색 API가 실행된 후 실행하기 위해 data(검색api 결과)가 변동이 있을때 이미지 API실행
  useEffect(() => {
    const imageData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(
            "https://port-0-lunch-recommendation-3wh3o2blrdkem9w.sel5.cloudtype.app/naver/image",
            {
              params: {
                query: `${data[0].title}${food}`,
              },
            }
          ),
          axios.get(
            "https://port-0-lunch-recommendation-3wh3o2blrdkem9w.sel5.cloudtype.app/naver/image",
            {
              params: {
                query: `${data[1].title}${food}`,
              },
            }
          ),
        ]);

        setImage([response1.data.items, response2.data.items]);
      } catch (error) {
          throw error;
      }
    };

    imageData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const fetchBlogData = async (index:number) => {
      try {
        const response = await axios.get(
          "https://port-0-lunch-recommendation-3wh3o2blrdkem9w.sel5.cloudtype.app/naver/blog",
          {
            params: {
              query: `${data[index].title} 내돈내산`,
            },
          }
        );

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
      <ResultComponent
        data={data}
        image={image}
        blogData={blogData}
        showModal={showModal}
        showReview={showReview}
        selectedModalIndex={selectedModalIndex}
        openModalHandler={openModalHandler}
        toggleReview={toggleReview}
        colorChange={colorChange}
      />
  );
};

export default ResultContainer