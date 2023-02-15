import { InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { Label } from '../../styles/typography';
import { Container, ErrorMessage } from './styles';

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  rules?: RegisterOptions;
  register: UseFormRegister<T>;
  errors?: Partial<DeepMap<T, FieldError>>;
}

export const Input = <T extends Record<string, any>>({
  label,
  register,
  errors,
  rules = {},
  name,
  ...rest
}: InputProps<T>) => {
  return (
    <Container error={!!(errors && errors[name])}>
      <Label>{label}</Label>
      <input {...register(name, rules)} {...rest} />
      {errors && errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </Container>
  );
};
