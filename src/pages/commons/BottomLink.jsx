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
  border-top: 3px solid black;
  border-radius: 0 0 10px 10px;
  background: #ea8573;
  width: 100%;
  padding: 10px 5px;
`;

export default BottomLink;
