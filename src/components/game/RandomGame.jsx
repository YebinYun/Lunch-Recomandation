import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const RandomGame = ({ slotRefs, foods }) => {
  return (
    <Layout>
      <SlotContainer>
        <div className="decoration">
          <Icon icon="twemoji:coin" className="coin1" />
          <Icon icon="twemoji:coin" className="coin2" />
          <div className="line" />
        </div>

        <div className="slot">
          <section>
            <div className="container" ref={slotRefs[0]}>
              {foods[0].map((food, i) => (
                <div key={i}>
                  <img src={food} alt={`food ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="slot">
          <section>
            <div className="container" ref={slotRefs[1]}>
              {foods[1].map((food, i) => (
                <div key={i}>
                  <img src={food} alt={`food ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="slot">
          <section>
            <div className="container" ref={slotRefs[2]}>
              {foods[2].map((food, i) => (
                <div key={i}>
                  <img src={food} alt={`food ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* <div className="slot">
          <section>
            <div className="container" ref={slotRefs[idx]}>
            {foods[idx].map((food, i) => (
                <div key={i}>
                  <img src={food} alt={`food ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        </div> */}
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
  > .decoration {
    > .coin1 {
      position: absolute;
      top: 12vh;
      left: 0;
      width: 35px;
      height: 35px;
      z-index: 2;
    }
    > .coin2 {
      position: absolute;
      top: 12vh;
      right: 0;
      width: 35px;
      height: 35px;
      z-index: 2;
    }
    > .line {
      position: absolute;
      top: 14vh;
      left: 0;
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
      padding: 2rem 0;
      border: 3px solid black;
      overflow: hidden;
      .container {
        transition: top 0.5s ease;
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
