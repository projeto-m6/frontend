import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main } from "../../components/Main";
import { AuthContext, IReset } from "../../contexts/auth";
import { resetSchema } from "../../validators/requestReset";
import { Container, Form } from "./style";

export const ResetPassword = () => {
  const { reset, isReset } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReset>({
    resolver: yupResolver(resetSchema),
  });
  return (
    <Container>
      <Header />
      <Main>
        {isReset ? (
          <Form>
            <h2>Senha atualizada!</h2>
            <p>Você será redirecionado para fazer o login!</p>
          </Form>
        ) : (
          <Form onSubmit={handleSubmit(reset)}>
            <h2>Redefinir senha</h2>
            <Input
              label="Token"
              placeholder="Cole o token"
              name="token"
              register={register}
              errors={errors.token}
            />
            <Input
              label="Senha"
              placeholder="Digite a senha"
              name="password"
              register={register}
              errors={errors.password}
            />
            <Input
              label="Confirmar senha"
              placeholder="Digite novamente a senha"
              name="confirmPassword"
              register={register}
              errors={errors.confirmPassword}
            />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Main>
      <Footer />
    </Container>
  );
};
