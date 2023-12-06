import React from 'react'
import styled from "styled-components";

const ResultInformation = ({ recommendation, toggleReview, index }) => {
  return (
    <>
      <InformationWrap>
        <h1> {recommendation.title} </h1>
        <InformationText>
          <span>사이트 :</span>
          {recommendation.link ? (
            <a target="_blank" href={recommendation.link} rel="noreferrer">
              {recommendation.link}
            </a>
          ) : (
            <span>
              {recommendation.title}은 사이트를 제공하고 있지 않습니다.
            </span>
          )}
        </InformationText>

        <InformationText>
          <span className="address1">주소 :</span>
          <span className="address2">{recommendation.roadAddress}</span>
        </InformationText>

        <BlogButton
          onClick={() => {
            toggleReview(index);
          }}>
          상세보기
        </BlogButton>
      </InformationWrap>
    </>
  );
};

export default ResultInformation


const InformationWrap = styled.div`
  text-align: left;
  margin: 2rem;
  & h1 {
    font-size: 2rem;
    margin: 4rem 0 2rem 0;
  }
`;

const InformationText = styled.div`
  display: flex;
  margin: 1rem 0;
  > a {
    color: black;
    &:hover {
      font-weight: bold;
    }
  }
`;

const BlogButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 25%;
  text-align: center;
  background: #ffc391;
  width: 50%;
  padding: 1rem 0;
  margin: 2rem 0;
  border: 3px solid #000;
  border-radius: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background: #f7984b;
    transition: 0.5s;
    font-weight: bold;
  }
`;