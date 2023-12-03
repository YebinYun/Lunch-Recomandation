import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const BottomLink = ({ colorChange }) => {
  return (
    <BottomLinkWrap colorChange={colorChange}>
      <Icon icon="fluent-emoji-flat:face-savoring-food" />
      <p>I LOVE FOOD</p>
      <Icon icon="fluent-emoji-flat:face-savoring-food" />
    </BottomLinkWrap>
  );
};

const BottomLinkWrap = styled.div`
  background: ${(props) => props.colorChange};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  border-top: 3px solid black;
  border-radius: 0 0 10px 10px;
  & svg {
    margin: 0 0.5rem;
  }
`;

export default BottomLink;
