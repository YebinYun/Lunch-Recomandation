import React from 'react'
import styled from "styled-components";

type Props = {
  recommendation: any;
  toggleReview: (index: number) => void;
  index:number;
};

const ResultInformation = ({ recommendation, toggleReview, index }: Props) => {
  return (
    <InformationContainer>
      <h1> {recommendation.title} </h1>
      <InformationLayout>
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
      </InformationLayout>
      <BlogButton
        onClick={() => {
          toggleReview(index);
        }}>
        상세보기
      </BlogButton>
    </InformationContainer>
  );
};

export default ResultInformation


const InformationContainer = styled.div`
  overflow:hidden;
  width:100%;
  display:flex;
  align-items: center;
  flex-direction:column;
  margin-top:5rem;
  & h1 {
    font-size: 2rem;
  }
`;

const InformationLayout = styled.div`
  text-align: left;
  margin: 1rem 0;
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
  overflow:hidden;
  text-align: center;
  background: #ffc391;
  width: 50%;
  padding: 0.5rem 0;
  border: 3px solid #000;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #f7984b;
    transition: 0.5s;
    font-weight: bold;
  }
`;