import React, { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from 'react'
import EnterClickComponent from "../../../components/main/game/EnterClickComponent.tsx";
import RotateSlot from '../../../hook/RotateSlot.tsx';
import { foods } from "../../../utils/foods/foods.tsx";

type props = {
  setResultFood: Dispatch<SetStateAction<string[]>>;
  buttonClickHandler: () => void;
  slotRefs: MutableRefObject<HTMLDivElement>[];
};

const EnterClickContainer = ({
  setResultFood,
  buttonClickHandler,
  slotRefs,
}: props) => {
    const [rolling, setRolling] = useState<boolean>(false);
    const rollingFoods = RotateSlot;

    useEffect(() => {
      if (!rolling) {
        const slot1Top = slotRefs[0].current.style.top;
        const slot3Top = `calc(${slot1Top} - 5px)`;
        slotRefs[2].current.style.top = slot3Top;
        slotRefs.slice(1, 2).forEach((slotRef) => {
          slotRef.current.style.top = slot1Top;
        });
      }
    }, [rolling, slotRefs]);

    // 룰렛 클릭했을때 실행되는 함수
    const roll = () => {
      const totalRolling = 10;
      setRolling(true);
      const rollingInterval = setInterval(() => {
        slotRefs.forEach((slotRef, i) => {
          const selected = rollingFoods(slotRef, i, foods);
          if (i === 0) {
            setResultFood(selected);
          }
        });
      }, 500);
      setTimeout(() => {
        // 슬롯 다돌고 결과 모달이 뜨기 전까지 delay를 주기 위한 코드
        clearInterval(rollingInterval);
        setRolling(false);
        setTimeout(() => {
          buttonClickHandler();
        }, 800);
      }, totalRolling * 400);
    };

  return (
    <EnterClickComponent
      rolling={rolling}
      roll={roll}
    />
  );
};

export default EnterClickContainer