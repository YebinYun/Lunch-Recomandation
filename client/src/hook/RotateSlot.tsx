// 실제 각 슬롯이 돌아가게 만들어주는 함수
type props = {
  slotRef: React.MutableRefObject<HTMLDivElement>;
  slotIndex:number;
  foods: string[][];
};

const RotateSlot = ({ slotRef, slotIndex, foods }: props) => {
  function setTop(top: number) {
    slotRef.current.style.top = `${top}px`;
  }
  const options = slotRef.current.children;
  const filteredFoods = foods[slotIndex];
  const randomOption = Math.floor(Math.random() * filteredFoods.length);
  const chosenOption = options[randomOption] as HTMLElement;;
  setTop(-chosenOption.offsetTop + 1);
  return filteredFoods[randomOption];
};

export default RotateSlot;
