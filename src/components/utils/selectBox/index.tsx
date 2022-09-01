import { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface ISelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  changeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  register: UseFormRegister<any>;
  selectName: string;
}

export default function FormSelect({
  changeHandler,
  register,
  selectName,
  children,
  ...rest
}: ISelectProps) {
  return (
    <select
      {...rest}
      {...register(selectName)}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => changeHandler(event)}
      className={`form-control form-select`}
    >
      {children}
    </select>
  );
}
