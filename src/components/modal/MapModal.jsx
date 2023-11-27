import React from "react";
import styled from "styled-components";
import ModalContainer from "../../pages/layout/ModalContainer";
import { PUBLIC_MAP_IMAGE } from "../../assets/images/images";

const MapModal = ({ modalClickHandler }) => {
  return (
    <ModalContainer modalClickHandler={modalClickHandler}>
      <GuideMapWrapper>
        <h1> [ 서울시 지도 ] </h1>
        <img src={PUBLIC_MAP_IMAGE.seoulMap} alt="서울 지도" />
      </GuideMapWrapper>
    </ModalContainer>
  );
};

const GuideMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & div {
    font-size: 0;
    position: absolute;
    top: 5px;
    right: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  & img {
    width: 40vw;
    height: 50vh;
  }
  & h1 {
    text-align: center;
    padding-top: 25px;
  }
`;

export default MapModal;
