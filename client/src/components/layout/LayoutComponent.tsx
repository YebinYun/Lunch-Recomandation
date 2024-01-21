import React, { ReactNode } from "react";
import styled from "styled-components";

type props = {
  children: ReactNode;
  background: string;
};

const LayoutComponent = ({ children, background }: props) => {
  return (
    <Layout background={background}>
      <div>{children}</div>
    </Layout>
  );
};

const Layout = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.background});
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

export default LayoutComponent;
