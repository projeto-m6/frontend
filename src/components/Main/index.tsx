import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { MenuSlide } from "../MenuSlide";
import { MainStyle } from "./style";

export const Main = ({ children }: any) => {
  const { isOpenMenu, isHamburguerMenu } = useContext(MenuContext);

  return (
    <MainStyle>
      {isOpenMenu && <MenuSlide isHamburguerMenu={isHamburguerMenu} />}
      {children}
    </MainStyle>
  );
};
