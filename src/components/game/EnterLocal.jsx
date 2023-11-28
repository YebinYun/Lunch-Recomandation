import React from "react";
import styled from "styled-components";

const EnterLocal = () => {
  return (
    <Layout>
      <SelectContainer>
        <option disabled selected>
          지역선택
        </option>
        <option value="seoul">서울시</option>
      </SelectContainer>
      <LocalChoice>
        현재는 서울시에서만, <br /> 선택이 가능합니다.
      </LocalChoice>
    </Layout>
  );
};
const Layout = styled.div`
  height: 12vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SelectContainer = styled.select`
  height: 5vh;
  width: 15vw;
  border: solid 3px black;
  border-radius: 10px;
  display: flex;
  padding-left: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  & select option {
  }
`;
const LocalChoice = styled.div`
  color: #777;
  line-height: 150%;
  font-size: 0.75rem;
`;

export default EnterLocal;
