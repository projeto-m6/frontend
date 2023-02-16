import * as yup from 'yup';

export const userRegister = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email incorreto'),
  cpf: yup.string().required('Cpf obrigatório').min(14, 'Minimo de 11 digitos'),
  cell: yup.string().required('Contato obrigatório'),
  birthdate: yup.string().required('Data de nascimento obrigatório'),
  description: yup.string().required('Descrição obrigatório'),
  cep: yup.string().required('Cep obrigatório'),
  state: yup.string().required('Estado obrigatório'),
  city: yup.string().required('Cidade Obrigatória'),
  road: yup.string().required('Rua obrigatorio'),
  number: yup.string().required('Número obrigatorio'),
  complemento: yup.string().notRequired(),
  is_buyer: yup.boolean().required('Tipo de Conta obrigatório'),
  password: yup.string().required('Senha obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password')], 'Senha não correspondem'),
});


export const createAnnouncement = yup.object().shape({
  is_sale: yup.boolean().required('Tipo de anúncio obrigatório'),
  title: yup.string().required('Título obrigatório').max(60, 'O título pode ter no máximo precisa ter no máximo 60 caracteres'),
  year: yup.string().required('Ano obrigatório').min(4, 'O ano precisa ter no mínimo 4 dígitos').max(4, 'O ano precisa ter no máximo 4 dígitos')
})
