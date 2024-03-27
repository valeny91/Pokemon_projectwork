import React, { ComponentProps, FC } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  
}

const LoginButton: FC<ButtonProps> = (props) => {
  return (
    <>
      <button {...props} className="btn btn-primary"  >Login</button>
    </>
  )
}

export default LoginButton
