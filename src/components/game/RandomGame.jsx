import React from "react";
import styled from "styled-components";

const RandomGame = () => {
  return (
    <Layout>
      <Container>
        <div className="slotContainer">
          <div className="coin1"></div>
          <div className="coin2"></div>
          <div className="line"></div>
          <div className="slot"></div>
        </div>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 60vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  background: #ffebe7;
  border: 3px solid black;
  border-radius: 15px;
`;

const Container = styled.div`
  width: 55vw;
  height: 25vh;
  background: #f5d3bf;
  border: 3px solid black;
  border-radius: 15px;
  & .slotContainer {
  }
`;

export default RandomGame;
