import React, { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import EnterDistrictComponent from '../../../components/main/game/EnterDistrictComponent.tsx'
import deselectedOptions from "../../../utils/district/deselectedOptions.json";

type props = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

const EnterDistrictContainer = ({ inputValue, setInputValue }: props) => {
    const [inputOptions, setInputOptions] =
      useState<string[]>(deselectedOptions);
    const [inputText, setInputText] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("");

  const inputAddHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    setSelectedOption("");
  };

  const inputDropDownHandler = (clickedOption: string) => {
    setInputValue(clickedOption);
    setInputOptions([clickedOption]);
    setShowDropdown(false);
  };

  const keyboardHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      // 현재 인덱스를 나타내는 변수와 마지막 인덱스 변수를 선언
      const currentIndex = inputOptions.indexOf(selectedOption);
      const lastIndex = inputOptions.length - 1;

      let newIndex
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
    <EnterDistrictComponent
      inputValue={inputValue}
      inputText={inputText}
      showDropdown={showDropdown}
      inputAddHandler={inputAddHandler}
      inputDeleteHandler={inputDeleteHandler}
      inputDropDownHandler={inputDropDownHandler}
      keyboardHandler={keyboardHandler}
      selectedOption={selectedOption}
      inputOptions={inputOptions}
    />
  );
};

export default EnterDistrictContainer