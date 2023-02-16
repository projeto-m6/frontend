import * as S from "./style";
import Logo from "../../assets/Motors shop.png";
import { B1600, H5500 } from "../../styles/typography";
import { useState } from "react";
import { MenuHamburguer } from "../MenuHamburguer";

export const Header = () => {
  const [isHamburguer, setIsHamburguer] = useState<boolean>(false);

  const myTimer = () => {
    if (window.screen.width < 764) {
      setIsHamburguer(true);
    } else {
      setIsHamburguer(false);
    }
  };
  setInterval(myTimer as any, 500);
  return (
    <S.ContainerHeader>
      <div id="width">
        <img src={Logo} alt="" />
        {isHamburguer ? (
          <MenuHamburguer />
        ) : (
          <S.NavLinks>
            <S.Links>
              <B1600>Carros</B1600>
              <B1600>Motos</B1600>
              <B1600>Leilão</B1600>
            </S.Links>
            <S.NavButtons>
              <button className="login">
                <B1600>Fazer login</B1600>
              </button>
              <button className="register">
                <B1600>Cadastrar</B1600>
              </button>
            </S.NavButtons>
          </S.NavLinks>
        )}
      </div>
    </S.ContainerHeader>
  );
};
