import React from "react";
import styled from "styled-components";
import TopLink from "../commons/TopLink";
import BottomLink from "../commons/BottomLink";

const ModalContainer = ({ children }) => {
  return (
    <ModalLayout>
      <TopLink />
      <MainWrap>{children}</MainWrap>
      <BottomLink />
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  position: absolute;
  top: 15vh;
  border: 3px solid black;
  border-radius: 15px;
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
`;
const MainWrap = styled.div`
  height: 80vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ModalContainer;
