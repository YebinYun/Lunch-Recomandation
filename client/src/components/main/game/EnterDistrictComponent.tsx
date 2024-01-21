import React, { KeyboardEvent } from "react";
import styled from "styled-components";

type props = {
  inputValue: string;
  selectedOption: string;
  inputOptions: string[];
  inputText: boolean;
  showDropdown: boolean;
  inputAddHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputDeleteHandler: () => void;
  inputDropDownHandler: (clickedOption: string) => void;
  keyboardHandler: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const EnterDistrictComponent = ({
  inputValue,
  inputText,
  showDropdown,
  inputAddHandler,
  inputDeleteHandler,
  inputDropDownHandler,
  keyboardHandler,
  selectedOption,
  inputOptions,
}: props) => {
  return (
    <Layout>
      <InputContainer>
        <input
          type="text"
          placeholder="지역구 입력"
          value={inputValue}
          onChange={inputAddHandler}
          onKeyDown={keyboardHandler}></input>
        <div className="deleteButton" onClick={inputDeleteHandler}>
          X
        </div>
      </InputContainer>
      {!inputText || !showDropdown ? (
        <MapChoice>
          지역구 미입력시,
          <br />
          랜덤으로 안내드립니다.
        </MapChoice>
      ) : (
        <DropDown
          inputOptions={inputOptions}
          handleComboBox={inputDropDownHandler}
          selectedOption={selectedOption}
        />
      )}
    </Layout>
  );
};

const DropDown = ({ inputOptions, handleComboBox, selectedOption }) => {
  return (
    <DropDownContainer>
      {inputOptions.length === 0 ? (
        <li>일치하는 검색 결과가 없습니다.</li>
      ) : (
        inputOptions.map((el:string, index:number) => (
          <li
            key={index}
            onClick={() => handleComboBox(el)}
            className={selectedOption === el ? "selected" : ""}
          >
            {el}
          </li>
        ))
      )}
    </DropDownContainer>
  );
};

const Layout = styled.div`
  height: 12vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const InputContainer = styled.div`
  position: relative;
  height: 5vh;
  display: flex;
  & input {
    width: 15vw;
    font-size: 1rem;
    padding-left: 0.5rem;
    border: solid 3px black;
    border-radius: 10px;
  }
  & div {
    position: absolute;
    right: 1rem;
    top: 1vh;
    cursor: pointer;
  }
`;
const MapChoice = styled.div`
  line-height: 150%;
  font-size: 0.75rem;
`;
// 지역구 입력값 보여주는 li
const DropDownContainer = styled.ul`
  height: 5rem;
  background-color: #fff2e9;
  overflow-y: scroll;
  margin-top: -1px;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  border: 2.2px solid black;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  > li {
    padding: 0 0.7rem;
    text-align: left;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin-bottom: 7px;
    &.selected {
      background-color: #f9b2a6;
    }
    &:hover {
      background-color: #f9b2a6;
    }
  }
`;

export default EnterDistrictComponent;
