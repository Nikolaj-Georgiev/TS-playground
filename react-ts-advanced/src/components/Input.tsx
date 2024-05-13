import { ComponentPropsWithoutRef } from 'react';

// type InputProps = {
//   label: string;
//   id: string;
// } & ComponentPropsWithoutRef<'input'>;

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

export default function Input({ label, id }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
        id={id}
      />
    </p>
  );
}
