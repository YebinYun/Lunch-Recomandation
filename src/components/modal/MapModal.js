import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { PUBLIC_MAP_IMAGE } from "../../assets/images/images";
import ModalContainer from "../../pages/layout/ModalContainer";

const MapModalFir = () => {
  return (
    <ModalContainer>
      <GuideMapWrapper>
        <h1> 서울시 지도 </h1>
        <img src={PUBLIC_MAP_IMAGE.seoulMap} alt="서울 지도" />
      </GuideMapWrapper>
    </ModalContainer>
  );
};

const GuideMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    width: 40vw;
    height: 30vh;
  }
  & h1 {
    text-align: center;
    padding-top: 25px;
    font-size: 1.5rem;
  }
`;

export default MapModalFir;
