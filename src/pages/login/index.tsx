import { useForm } from "react-hook-form";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main } from "../../components/Main";
import { B1600, B2500, H5500 } from "../../styles/typography";
import * as S from "./styles";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <>
      <Header />
      <Main>
        <S.Container>
          <S.ContainerLogin>
            <H5500>Login</H5500>

            <form>
              <Input label="Usuario" name="user" register={register} />
              <Input label="Password" name="password" register={register} />

              <button>Entrar</button>
            </form>
            <div className="containerRegister">
              <B1600>Ainda nao tem uma conta?</B1600>
              <button>
                <B2500>Cadastrar</B2500>
              </button>
            </div>
          </S.ContainerLogin>
        </S.Container>
      </Main>
      <Footer />
    </>
  );
};
