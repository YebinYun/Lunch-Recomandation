import React, { useState } from "react";
import styled from "styled-components";
import HomepageLayout from "./HompageLayout";
import TopLink from "../commons/TopLink";
import MapLink from "../commons/MapLink";
import BottomLink from "../commons/BottomLink";
import MapModal from "../../components/modal/MapModal";
import { useLocation } from "react-router-dom";

const HomepageContainer = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const modalClickHandler = () => {
    setShowModal(!showModal);
  };

  const location = useLocation();
  const colorChange =
    location.pathname === "/ResultPage" ? "#ffa807" : "#ea8573";
  const colorMapChange =
    location.pathname === "/ResultPage" ? "#ffdd9f" : "#f8b0a3";

  return (
    <HomepageLayout>
      <TopLink colorChange={colorChange} />
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
    </HomepageLayout>
  );
};

const MainWrap = styled.div`
  height: 80vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default HomepageContainer;
