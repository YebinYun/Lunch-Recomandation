import React, { useState } from "react";
import styled from "styled-components";
import HomepageLayout from "./HompageLayout";
import TopLink from "../commons/TopLink";
import MapLink from "../commons/MapLink";
import BottomLink from "../commons/BottomLink";
import MapModal from "../../components/modal/MapModal";

const HomepageContainer = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const modalClickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <HomepageLayout>
      <TopLink />
      <MapLink modalClickHandler={modalClickHandler} />
      <MainWrap>{children}</MainWrap>
      <BottomLink />
      {showModal && <MapModal modalClickHandler={modalClickHandler} />}
    </HomepageLayout>
  );
};

const MainWrap = styled.div`
  height: 80vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomepageContainer;
