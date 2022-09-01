import { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  inputName: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  register,
  inputName,
  changeHandler,
  ...rest
}: IInputProps) {
  return (
    <input
      {...rest}
      {...register(inputName)}
      onChange={(event: ChangeEvent<HTMLInputElement>) => changeHandler(event)}
      className="form-control"
    />
  );
}
