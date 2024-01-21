import React, { useState } from "react";
import styled from "styled-components";
import deselectedOptions from "../../../utils/district/deselectedOptions.json";

const EnterDistrict = ({ inputValue, setInputValue }) => {
  const [inputOptions, setInputOptions] = useState(deselectedOptions);
  const [inputText, setInputText] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const inputAddHandler = (event) => {
    setInputValue(event.target.value);
    setInputText(true);
    setInputOptions(
      deselectedOptions.filter((el) => {
        return el.startsWith(event.target.value);
      })
    );
    setShowDropdown(true);
  };

  const inputDeleteHandler = () => {
    setInputValue("");
    setShowDropdown(false);
    setSelectedOption(null);
  };

  const inputDropDownHandler = (clickedOption) => {
    setInputValue(clickedOption);
    setInputOptions([clickedOption]);
    setShowDropdown(false);
  };

  const keyboardHandler = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      // 현재 인덱스를 나타내는 변수와 마지막 인덱스 변수를 선언
      const currentIndex = inputOptions.indexOf(selectedOption);
      const lastIndex = inputOptions.length - 1;

      let newIndex;
      if (event.key === "ArrowUp") {
        // ↑ 버튼 입력 현재인덱스가 0번째 인덱스(첫번째)요소 일경우, 마지막 인덱스로 설정
        // 0번 인덱스가 아닌경우 현재 인덱스 -1
        newIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
        // ↓ 버튼 입력 마지막 인덱스 일경우, 0번 인덱스로 설정
        // 마지막 인덱스가 아닌경우 현재 인덱스 +1
      } else if (event.key === "ArrowDown") {
        newIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
      }
      // 위에서 구한 newIndex로 inputOptions[newIndex]로 값에 접근하고 해당 값을 selectedOption 값으로 상태변화
      setSelectedOption(inputOptions[newIndex]);
    } else if (event.key === "Enter") {
      // Enter 키 입력 시 선택된 dropdown 항목의 값으로 input값 변경
      // selectedOption 값이 있다면 (초기값은 null, 위에 작업을 거치면 값이 생김)
      if (selectedOption) {
        // inputValue 상태변화 (값변경)
        setInputValue(selectedOption);
        setShowDropdown(false); // 검색결과 앤터 클릭시 드랍다운 닫히도록
      }
    }
  };

  return (
    <Layout>
      <InputContainer>
        <input
          type="text"
          placeholder="지역구 입력"
          value={inputValue}
          onChange={inputAddHandler}
          onKeyDown={keyboardHandler}
        ></input>
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
        inputOptions.map((el, index) => (
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

export default EnterDistrict;
