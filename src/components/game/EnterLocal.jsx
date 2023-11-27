import React from "react";

const EnterLocal = () => {
  return (
    <div className="subWarp">
      <div className="regionSelect">
        <select className="select">
          <option disabled selected>
            지역선택
          </option>
          <option value="seoul"> 서울시</option>
        </select>
        <div className="districtChoice">
          현재는 서울시에서만, <br /> 선택이 가능합니다.
        </div>
      </div>
    </div>
  );
};

export default EnterLocal;
