import * as S from './style';
import Logo from '../../assets/Motors shop.png';
import { BiMenu } from 'react-icons/bi';
import { B1600 } from '../../styles/typography';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Avatar } from '../Avatar';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { user, signOut } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <S.ContainerHeader>
      <div id="width">
        <img src={Logo} alt="" />

        <S.MenuWithoutUser>
          <BiMenu />
          <div>
            <ul>
              <li onClick={() => navigate('/', { replace: true })}>Carros</li>
              <li onClick={() => navigate('/', { replace: true })}>Motos</li>
              <li onClick={() => navigate('/', { replace: true })}>Leilão</li>

              {user ? (
                <>
                  <li>Editar Perfil</li>
                  <li>Editar Endereço</li>
                  {!user.is_buyer && <li>Meus Anúncios</li>}
                  <li onClick={signOut}>Sair</li>
                </>
              ) : (
                <>
                  <li onClick={() => navigate('/login', { replace: true })}>Fazer Login</li>
                  <li onClick={() => navigate('/register', { replace: true })}>Cadastrar</li>
                </>
              )}
            </ul>
          </div>
        </S.MenuWithoutUser>
        <S.NavLinks>
          <S.Links>
            <B1600 onClick={() => navigate('/', { replace: true })}>Carros</B1600>
            <B1600 onClick={() => navigate('/', { replace: true })}>Motos</B1600>
            <B1600 onClick={() => navigate('/', { replace: true })}>Leilão</B1600>
          </S.Links>
          {user ? (
            <S.MenuWithUser>
              <Avatar username={user.name} />
              <span>{user.name}</span>
              <div>
                <ul>
                  <li>Editar Perfil</li>
                  <li>Editar Endereço</li>
                  {!user.is_buyer && <li>Meus Anúncios</li>}
                  <li onClick={signOut}>Sair</li>
                </ul>
              </div>
            </S.MenuWithUser>
          ) : (
            <S.NavButtons>
              <button onClick={() => navigate('/login', { replace: true })} className="login">
                Fazer login
              </button>
              <button onClick={() => navigate('/register', { replace: true })} className="register">
                Cadastrar
              </button>
            </S.NavButtons>
          )}
        </S.NavLinks>
      </div>
    </S.ContainerHeader>
  );
};
