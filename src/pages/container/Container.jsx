import React from "react";
import styled from "styled-components";
import { PUBLIC_BACKGROUND_IMAGE } from "../../assets/images/images";

const Container = ({ children }) => {
  return (
    <ContainerWrap>
      <div>{children}</div>
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${PUBLIC_BACKGROUND_IMAGE.mainBackground});
  background-size: cover;
  > div {
    display: flex;
    width: 80vw;
    height: 90vh;
    border-radius: 15px;
    border: 3px solid gray-800;
    text-align: center;
    box-shadow: 5px 5px 5px 5px gray;
  }
`;

export default Container;
