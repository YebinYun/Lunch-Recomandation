import React from "react";
import styled from "styled-components";

const PUBLIC = process.env.PUBLIC_URL;
const loading = `${PUBLIC}/images/loading.gif`;

const ClickVideo = styled.img`
  width: 230px;
  height: 80px;
`;
const RollContainer = ({ rolling, roll }) => {
  return (
    <div className="rollContainer">
      <div
        className={!rolling ? "roll rolling" : "roll"}
        onClick={!rolling ? roll : undefined}
        disabled={rolling}
      >
        {rolling ? (
          <ClickVideo src={loading} alt="loading gif" />
        ) : (
          "C L I C K !"
        )}
      </div>
    </div>
  );
};

export default RollContainer;
