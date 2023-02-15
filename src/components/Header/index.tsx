import * as S from "./style";
import Logo from "../../assets/Motors shop.png";
import { B1600, H5500 } from "../../styles/typography";

export const Header = () => {
  return (
    <S.ContainerHeader>
      <img src={Logo} alt="" />
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
    </S.ContainerHeader>
  );
};
