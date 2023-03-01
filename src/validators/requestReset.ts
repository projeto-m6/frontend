import * as yup from "yup";

export const requestSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
});

export const resetSchema = yup.object().shape({
  token: yup.string().required("Token Obrigatório"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup.string().required("Senha obrigatória"),
});
