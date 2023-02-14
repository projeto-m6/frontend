import * as yup from 'yup';

export const userRegister = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email incorreto'),
  cpf: yup
    .string()
    .required('Cpf obrigatório')
    .min(14, 'Minimo de 11 digitos')
    .max(14, 'Máximo de 11 digitos'),
  cell: yup.string().required('Contato obrigatório'),
  bithdate: yup.string().required('Data de nascimento obrigatório'),
  description: yup.string().required('Descrição obrigatório'),
  address: yup.object({
    cep: yup.string().required('Cep obrigatório'),
    state: yup.string().required('Estado obrigatório'),
    city: yup.string().required('Cidade Obrigatória'),
    road: yup.string().required('Rua obrigatorio'),
    number: yup.string().required('Número obrigatorio'),
    complemento: yup.string().notRequired(),
  }),
  is_buyer: yup.string().required('Tipo de Conta obrigatório'),
  password: yup.string().required('Senha obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password')], 'Senha não correspondem'),
});
