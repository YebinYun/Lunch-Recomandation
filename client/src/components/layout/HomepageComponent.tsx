import React, { ReactNode } from "react";
import styled from "styled-components";
import LayoutComponent from "./LayoutComponent";
import TopLink from "../../pages/commons/TopLink";
import MapLink from "../../pages/commons/MapLink";
import BottomLink from "../../pages/commons/BottomLink";
import MapModal from "../modal/MapModal";

type props = {
  children: ReactNode;
  modalClickHandler: () => void;
  showModal: boolean;
  colorChange: string;
  colorMapChange: string;
};

const HomepageComponent = ({
  children,
  modalClickHandler,
  showModal,
  colorChange,
  colorMapChange,
}: props) => {
  return (
    <LayoutComponent>
      <TopLink
        colorChange={colorChange}
        modalClickHandler={modalClickHandler}
      />
      <MapLink
        modalClickHandler={modalClickHandler}
        colorMapChange={colorMapChange}
      />
      <MainWrap>{children}</MainWrap>
      <BottomLink colorChange={colorChange} />
      {showModal && (
        <MapModal
          modalClickHandler={modalClickHandler}
          colorChange={colorChange}
        />
      )}
    </LayoutComponent>
  );
};

const MainWrap = styled.div`
  height: 80vh;
  min-height: 600px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default HomepageComponent;
