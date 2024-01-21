import React from "react";
import styled from "styled-components";

type props = {
  modalClickHandler: () => void;
  colorMapChange: string;
};

const MapLink = ({ modalClickHandler, colorMapChange }: props) => {
  return (
    <MapLinkWrap colorMapChange={colorMapChange}>
      <MapLinkButton onClick={modalClickHandler}>
        <p>지도 보기</p>
      </MapLinkButton>
    </MapLinkWrap>
  );
};

const MapLinkWrap = styled.div<{ colorMapChange: string }>`
  display: flex;
  border-bottom: 3px solid black;
  background: ${(props) => props.colorMapChange};
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
