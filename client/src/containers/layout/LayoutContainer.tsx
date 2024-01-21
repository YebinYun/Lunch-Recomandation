import React, { ReactNode } from 'react'
import LayoutComponent from '../../components/layout/LayoutComponent.tsx'
import { useLocation } from "react-router-dom";
import { PUBLIC_BACKGROUND_IMAGE } from "../../utils/images/images.tsx";

type props = {
  children: ReactNode;
};

const LayoutContainer = ({ children }: props) => {
    const location = useLocation();
    const background =
      location.pathname === "/Recomandation"
        ? PUBLIC_BACKGROUND_IMAGE.resultBackground
        : PUBLIC_BACKGROUND_IMAGE.mainBackground;

  return (
    <div>
          <LayoutComponent children={children} background={background} />
    </div>
  );
};

export default LayoutContainer