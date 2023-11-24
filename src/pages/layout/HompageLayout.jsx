import React from "react";
import styled from "styled-components";
import { PUBLIC_BACKGROUND_IMAGE } from "../../assets/images/images";

const HomepageLayout = ({ children }) => {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${PUBLIC_BACKGROUND_IMAGE.mainBackground});
  background-size: cover;
  > div {
    display: flex;
    flex-direction: column;
    width: 80vw;
    border: 3px solid black;
    border-radius: 15px;
    text-align: center;
    box-shadow: 5px 5px 5px 5px gray;
  }
`;

export default HomepageLayout;
