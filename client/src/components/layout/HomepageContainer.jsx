import React, { useState } from "react";
import styled from "styled-components";
import HomepageLayout from "./HompageLayout";
import TopLink from "../../pages/commons/TopLink";
import MapLink from "../../pages/commons/MapLink";
import BottomLink from "../../pages/commons/BottomLink";
import MapModal from "../modal/MapModal";
import { useLocation } from "react-router-dom";

const HomepageContainer = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const modalClickHandler = () => {
    setShowModal(!showModal);
  };

  const location = useLocation();
  const colorChange =
    location.pathname === "/Recomandation" ? "#ffa807" : "#ea8573";
  const colorMapChange =
    location.pathname === "/Recomandation" ? "#ffdd9f" : "#f8b0a3";

  return (
    <HomepageLayout>
      <TopLink colorChange={colorChange} />
      <MapLink
        modalClickHandler={modalClickHandler}
        colorMapChange={colorMapChange}
      />
      <MainWrap colorChange={colorChange}>{children}</MainWrap>
      <BottomLink colorChange={colorChange} />
      {showModal && (
        <MapModal
          modalClickHandler={modalClickHandler}
          colorChange={colorChange}
        />
      )}
    </HomepageLayout>
  );
};

const MainWrap = styled.div`
  height: 80vh;
  min-height:600px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default HomepageContainer;
