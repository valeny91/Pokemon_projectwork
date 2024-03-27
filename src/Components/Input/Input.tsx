import React, { ComponentProps, FC } from 'react'
interface InputProps extends ComponentProps<'input'> {
  label: string;
}
const Input: FC<InputProps> = ({ type, label, name }) => {
  return (
    <label>
      <span className='block'>{label}</span>
      <input name={name}
        type={type}
        className="form-control"
        id="email"
        aria-describedby="emailHelp" />
    </label>
  )
}

export default Input
