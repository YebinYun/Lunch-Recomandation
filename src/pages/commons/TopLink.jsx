import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const TopLink = ({ modalClickHandler, buttonClickHandler }) => {
  return (
    <TopLinkWrap>
      <DirectionButtonWrap>
        <Icon
          icon="fluent-emoji-high-contrast:left-arrow"
          width="30"
          height="30"
        />
        <Icon
          icon="fluent-emoji-high-contrast:right-arrow"
          width="30"
          height="30"
        />
      </DirectionButtonWrap>
      <UrlLinkWrap>
        <div>
          <p>https:// 프로젝트.참숯가마/오늘_뭐_먹지?</p>
          <Icon icon="solar:star-broken" width="25" height="25" />
        </div>
        <Icon icon="ic:round-refresh" width="30" height="30" />
      </UrlLinkWrap>
      <ActionButtonWrap>
        <Icon icon="ic:round-minimize" width="40" height="40" />
        <Icon
          icon="ep:close-bold"
          width="30"
          height="30"
          onClick={modalClickHandler}
        />
      </ActionButtonWrap>
    </TopLinkWrap>
  );
};

const TopLinkWrap = styled.div`
  display: flex;
  border-bottom: 3px solid black;
  border-radius: 10px 10px 0 0;
  background: #ea8573;
  width: 100%;
  padding: 10px 5px;
`;

const DirectionButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 15vw;
`;

const UrlLinkWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70vw;
  & div {
    background: white;
    display: flex;
    align-items: center;
    padding: 5px 0;
    border: 3px solid black;
    border-radius: 15px;
    > p {
      margin: 0 15px;
    }
    > svg {
      margin: 0 15px;
    }
  }
  & svg {
    margin-left: 15px;
  }
`;

const ActionButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 15vw;
  cursor: pointer;
`;

export default TopLink;
