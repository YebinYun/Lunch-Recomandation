import React from "react";
import { Icon } from "@iconify/react";
//
const GameWarp = ({ slotRefs, foods }) => {
  return (
    <div className="GameWarp">
      <div className="SlotMachine">
        <div className="slotContainer">
          <Icon icon="twemoji:coin" className="coin1" />
          <Icon icon="twemoji:coin" className="coin2" />
          <div className="line"></div>
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
        </div>
      </div>
    </div>
  );
};

export default GameWarp;
