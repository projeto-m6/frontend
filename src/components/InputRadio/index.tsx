import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { Container } from './styles';

interface InputRadioProps<T extends FieldValues> {
  label: string;
  value: string;
  id: string;
  name: Path<T>;
  rules?: RegisterOptions;
  register: UseFormRegister<T>;
  errors?: Partial<DeepMap<T, FieldError>>;
  checked?: boolean;
}

export const InputRadio = <T extends Record<string, any>>({
  label,
  value,
  id,
  name,
  register,
  rules = {},
  errors,
  checked = false,
}: InputRadioProps<T>) => {
  return (
    <Container>
      <input id={id} type="radio" checked={checked} {...register(name, rules)} value={value} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};
