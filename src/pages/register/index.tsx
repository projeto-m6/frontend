import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input';
import { InputRadio } from '../../components/InputRadio';
import { B2500, H5500 } from '../../styles/typography';
import { cepMask, cpfMask, phoneMask } from '../../utils/masks';
import { Button, Container, Form } from './styles';
import { userRegister } from '../../validators/userRegister';
import { ErrorMessage } from '../../components/Input/styles';
import Footer from '../../components/footer';
import { Header } from '../../components/Header';
import { AuthContext, ISignInRequest } from '../../contexts/auth';
import { ModalSuccess } from '../../components/ModalSuccess';

interface IUserRegisterForm {
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  password: string;
  confirmPassword: string;
  is_buyer: boolean;
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterForm>({
    resolver: yupResolver(userRegister),
  });

  const { signIn } = useContext(AuthContext);

  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const onSubmit = async (data: IUserRegisterForm) => {
    const newData: ISignInRequest = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      cell: data.cell,
      birthdate: data.birthdate,
      description: data.description,
      password: data.password,
      is_buyer: data.is_buyer,
      address: {
        cep: data.cep,
        state: data.state,
        city: data.city,
        road: data.road,
        number: data.number,
        complement: data.number,
      },
    };
    if (await signIn(newData)) {
      setOpenModal(true);
    }
    console.log(newData);
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H5500>Cadastro</H5500>
          <B2500>Informações pessoais</B2500>
          <Input
            label="Nome"
            placeholder="Ex: Samuel Leão"
            name="name"
            register={register}
            errors={errors}
          />
          <Input
            label="Email"
            placeholder="Ex: samuel@kenzie.com.br"
            name="email"
            register={register}
            errors={errors}
          />
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            name="cpf"
            register={register}
            errors={errors}
            value={cpf}
            rules={{
              onChange: (e) => setCpf(cpfMask(e.target.value)),
            }}
          />
          <Input
            label="Celular"
            placeholder="(DDD) 90000-0000"
            name="cell"
            register={register}
            errors={errors}
            value={phone}
            rules={{
              onChange: (e) => setPhone(phoneMask(e.target.value)),
            }}
          />
          <Input
            label="Data de Nascimento"
            type="date"
            name="birthdate"
            register={register}
            errors={errors}
          />
          <Input
            label="Descrição"
            placeholder="Digitar descrição"
            name="description"
            register={register}
            errors={errors}
          />
          <B2500>Informações de endereço</B2500>
          <Input
            label="CEP"
            placeholder="00000-000"
            name="cep"
            register={register}
            errors={errors}
            value={cep}
            rules={{
              onChange: (e) => setCep(cepMask(e.target.value)),
            }}
          />
          <div className="flex">
            <Input
              label="Estado"
              placeholder="Digitar Estado"
              name="state"
              register={register}
              errors={errors}
            />
            <Input
              label="Cidade"
              placeholder="Digitar Cidade"
              name="city"
              register={register}
              errors={errors}
            />
          </div>
          <Input
            label="Rua"
            placeholder="Digitar rua"
            name="road"
            register={register}
            errors={errors}
          />
          <div className="flex">
            <Input
              label="Numero"
              placeholder="Digitar numero"
              name="number"
              register={register}
              errors={errors}
            />
            <Input
              label="Complemento"
              placeholder="Ex: apart 307"
              name="complement"
              register={register}
              errors={errors}
            />
          </div>
          <B2500>Tipo de conta</B2500>
          <div className="flex">
            <InputRadio
              id="comprador"
              label="Comprador"
              name="is_buyer"
              value="true"
              register={register}
            />
            <InputRadio
              id="anunciante"
              label="Anunciante"
              name="is_buyer"
              value="false"
              register={register}
            />
          </div>
          {errors.is_buyer && <ErrorMessage>Escolha uma das opções acima</ErrorMessage>}

          <Input
            label="Senha"
            type="password"
            placeholder="Digitar senha"
            name="password"
            register={register}
            errors={errors}
          />
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="confirmar senha"
            name="confirmPassword"
            register={register}
            errors={errors}
          />
          <ModalSuccess variant="registro" openModal={openModal} setOpenModal={setOpenModal} />
        </Form>
      </Container>
      <Footer />
    </>
  );
};
