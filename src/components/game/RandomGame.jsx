import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { foods } from "../../utils/dummy/foods";

const Slot = ({ foods, slotRef }) => (
  <div className="slot">
    <section>
      <div className="container" ref={slotRef}>
        {foods.map((food, i) => (
          <div key={i}>
            <img src={food} alt={`food ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

const RandomGame = ({ slotRefs }) => {
  return (
    <Layout>
      <SlotContainer>
        <div className="decorationWrap">
          <Icon icon="twemoji:coin" className="decoration coin coin1" />
          <Icon icon="twemoji:coin" className="decoration coin coin2" />
          <div className="decoration line" />
        </div>

        {foods.map((foodList, index) => (
          <Slot key={index} foods={foodList} slotRef={slotRefs[index]} />
        ))}
      </SlotContainer>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
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

const SlotContainer = styled.div`
  width: 55vw;
  height: 25vh;
  background: #f5d3bf;
  border: 3px solid black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  > .decorationWrap {
    > .decoration {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    > .coin {
      width: 50px;
      height: 50px;
      z-index: 2;
    }
    > .coin1 {
      left: 5%;
    }
    > .coin2 {
      left: 95%;
    }
    > .line {
      left: 50%;
      width: 58vw;
      border-top: 3px dashed blanchedalmond;
      z-index: 1;
    }
  }
  .slot {
    width: 32%;
    section {
      background-color: white;
      height: 25vh;
      margin: 0 0.5rem;
      padding: 4rem 0;
      border: 3px solid black;
      /* overflow: hidden; */
      .container {
        transition: top 0.5s ease;
        position: absolute;
        top: 50%;
        transform: translate(40%, -10%);
        > div {
          margin: 1rem 0;
          > img {
            width: 5rem;
            height: 5rem;
          }
        }
      }
    }
  }
`;

export default RandomGame;
