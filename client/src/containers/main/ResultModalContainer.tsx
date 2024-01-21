import React from 'react'
import { useNavigate } from "react-router-dom";
import ResultModalComponent from '../../components/main/ResultModalComponent.tsx'
import { foodCountry } from "../../utils/foods/foods.tsx";

type props = {
  inputValue: string;
  resultFoods: string; 
  result: boolean; 
  openModalHandler: () => void;
  colorChange: string;
};

const ResultModalContainer = ({
  inputValue,
  resultFoods,
  result,
  openModalHandler,
  colorChange,
}:props) => {
    const tittleFood = Object.keys(foodCountry).filter(
      (country) => foodCountry[country][0] === resultFoods
    );
    
    const iconFood = foodCountry[tittleFood[0]];
    const navigate = useNavigate();
    const viewResults = () => {
      navigate(
        `/Recomandation?inputValue=${encodeURIComponent(
          inputValue
        )}&food=${encodeURIComponent(tittleFood[0])}`
      );
    };

    return (
      <ResultModalComponent
        result={result}
        openModalHandler={openModalHandler}
        colorChange={colorChange}
        tittleFood={tittleFood}
        iconFood={iconFood}
        viewResults={viewResults}
      />
    );
};

export default ResultModalContainer