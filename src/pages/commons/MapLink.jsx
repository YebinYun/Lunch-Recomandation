import React from "react";
import styled from "styled-components";

const MapLink = ({ modalClickHandler }) => {
  return (
    <MapLinkWrap>
      <MapLinkButton onClick={modalClickHandler}>
        <p>지도 보기</p>
      </MapLinkButton>
    </MapLinkWrap>
  );
};

const MapLinkWrap = styled.div`
  display: flex;
  border-bottom: 3px solid black;
  background: #ea8573;
  width: 100%;
  padding: 5px 5px;
`;
const MapLinkButton = styled.div`
  display: flex;
  justify-content: center;
  border: 3px solid black;
  border-radius: 10px;
  background: white;
  width: 15vw;
  padding: 2.5px 0;
  margin: 0 5px;
  cursor: pointer;
`;

export default MapLink;
