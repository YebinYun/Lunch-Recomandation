import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const BottomLink = () => {
  return (
    <BottomLinkWrap>
      <Icon icon="fluent-emoji-flat:face-savoring-food" />
      <p>I LOVE FOOD</p>
    </BottomLinkWrap>
  );
};

const BottomLinkWrap = styled.div`
  display: flex;
  border: 3px solid black;
  border-top: none;
  border-radius: 0 0 15px 15px;
  background: #ea8573;
  width: 80vw;
  padding: 10px 5px;
`;

export default BottomLink;
