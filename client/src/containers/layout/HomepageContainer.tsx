import React, { ReactNode, useState } from 'react'
import { useLocation } from "react-router-dom";
import HomepageComponent from '../../components/layout/HomepageComponent.tsx'

type Props = {
  children: ReactNode;
};
const HomepageContainer = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalClickHandler = () => {
    setShowModal(!showModal);
  };
  const location = useLocation();
  const colorChange =
    location.pathname === "/Recomandation" ? "#ffa807" : "#ea8573";
  const colorMapChange =
    location.pathname === "/Recomandation" ? "#ffdd9f" : "#f8b0a3";

  return (
    <HomepageComponent
      children={children}
      modalClickHandler={modalClickHandler}
      showModal={showModal}
      colorChange={colorChange}
      colorMapChange={colorMapChange}
    />
  );
};

export default HomepageContainer