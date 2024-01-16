import React from "react";
import styled from "styled-components";
import { PUBLIC_LOADING_IMAGE } from "../../utils/images/images.tsx";

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoPlay = styled.img`
  width: 18vw;
  height: 12vh;
  border: solid 3px black;
  border-radius: 15px;
`;

const RandomButton = ({ rolling, roll }) => {
  return (
    <div className="rollContainer">
      <VideoContainer
        className={!rolling ? "roll rolling" : "roll"}
        onClick={!rolling ? roll : undefined}
        disabled={rolling}
      >
        {rolling ? (
          <VideoPlay src={PUBLIC_LOADING_IMAGE.loading} alt="loading gif" />
        ) : (
          "C L I C K !"
        )}
      </VideoContainer>
    </div>
  );
};

export default RandomButton;
