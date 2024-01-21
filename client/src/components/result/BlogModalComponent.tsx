import React from "react";
import styled from "styled-components";
import ModalComponent from "../layout/ModalComponent.tsx";

type props = {
  blogData: Record<number, any[]>;
  data: any[];
  selectedModalIndex: number;
  colorChange: string;
  toggleReview: () => void;
};

const PUBLIC = process.env.PUBLIC_URL;

const BlogModalComponent = ({
  blogData,
  data,
  selectedModalIndex,
  colorChange,
  toggleReview,
}: props) => {
  return (
    <ModalComponent modalClickHandler={toggleReview} colorChange={colorChange}>
      <TitleWrap>
        <h1> {data[selectedModalIndex].title} </h1>
        <h2> 🐷 블로그 후기 보기 🐷 </h2>
      </TitleWrap>
      <ReviewPostWrap>
        {blogData[selectedModalIndex].map((data) => (
          <div key={data.link}>
            <div className="reviewPostImg">
              <img
                src={`${PUBLIC}/images/getReplaceBlog.gif`}
                alt="대체 이미지"
              />
            </div>
            <a
              target="_blank"
              href={data.link}
              className="reviewPostText"
              rel="noreferrer">
              <h4>{data.title}</h4>
              <p>
                작성일 {data.postdate.substring(0, 4)}년{" "}
                {data.postdate.substring(4, 6)}월{" "}
                {data.postdate.substring(6, 8)}일
              </p>
            </a>
          </div>
        ))}
      </ReviewPostWrap>
    </ModalComponent>
  );
};

const TitleWrap = styled.div`
  > h1 {
    font-size: 2rem;
  }
  > h2 {
    font-size: 1.2rem;
    margin: 2rem;
  }
`;

const ReviewPostWrap = styled.div`
  display: flex;
  justify-content: center;
  width:70vw;
  > div {
    width: 250px;
    border: 2px solid gray;
    border-radius: 15px;
    margin: 0 10px;
    overflow: hidden;
    .reviewPostImg {
      height: 200px;
      border-bottom: 3px solid black;
      background-color: ivory;
      > img {
        width: 200px;
      }
    }
    .reviewPostText {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: white;
      text-decoration: none;
      > h4 {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.5rem;
        padding: 5px;
        color: black;
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      > p {
        font-size: 1rem;
        color: #777;
        display: flex;
        padding: 0 10px;
        justify-content: center;
      }
    }
  }
`;

export default BlogModalComponent;

