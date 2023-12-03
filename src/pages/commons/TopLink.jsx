import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const TopLink = ({ modalClickHandler, colorChange }) => {
  const navigate = useNavigate();

  return (
    <TopLinkWrap colorChange={colorChange}>
      <DirectionButtonWrap>
        <Icon
          icon="fluent-emoji-high-contrast:left-arrow"
          width="30"
          height="30"
          onClick={() => {
            navigate(-1);
          }}
        />
        <Icon
          icon="fluent-emoji-high-contrast:right-arrow"
          width="30"
          height="30"
          onClick={() => {
            navigate(1);
          }}
        />
      </DirectionButtonWrap>

      <UrlLinkWrap>
        <div className="linkBar">
          <p className="item">https:// 프로젝트.참숯가마/오늘_뭐_먹지?</p>
          <Icon
            className="item"
            icon="solar:star-broken"
            width="25"
            height="25"
          />
        </div>
        <div className="refresh">
          <Icon
            icon="ic:round-refresh"
            width="30"
            height="30"
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
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
  background: ${(props) => props.colorChange};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  border-bottom: 3px solid black;
  border-radius: 10px 10px 0 0;
`;
const DirectionButtonWrap = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;
const UrlLinkWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > .linkBar {
    background: white;
    display: flex;
    align-items: center;
    padding: 5px 0;
    border: 3px solid black;
    border-radius: 15px;
    > .item {
      margin: 0 15px;
    }
  }
  & svg {
    margin-left: 15px;
  }
  > .refresh {
    cursor: pointer;
  }
`;
const ActionButtonWrap = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > svg:last-child {
    cursor: pointer;
  }
`;

export default TopLink;
