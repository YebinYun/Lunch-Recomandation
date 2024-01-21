import React, { ReactNode } from "react";
import styled from "styled-components";
import LayoutContainer from "../../containers/layout/LayoutContainer.tsx";
import TopLink from "./commons/TopLink.tsx";
import MapLink from "./commons/MapLink.tsx";
import BottomLink from "./commons/BottomLink.tsx";
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
    <LayoutContainer>
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
    </LayoutContainer>
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
