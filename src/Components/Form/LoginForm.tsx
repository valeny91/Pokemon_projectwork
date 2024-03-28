import React, { FC, FormEvent } from 'react'
import LoginButton from '../Button/Button'

import Button from '../Button/Button'
import Input from '../Input/Input'
import Checkbox from '../Checkbox/Checkbox'
import { Link, useNavigate } from 'react-router-dom'

const Form: FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // previene il comportamento predefinito del form
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    const isAdminLogin = formData.get('check') === 'on';
    if(isAdminLogin){
      navigate('/admin')
    } else {
      navigate('/main-page')
    }
  };


  return (
    <div>
      <h2>Login <i className="ri-user-line"></i>
      </h2>
      <form
        onSubmit={handleSubmit}
        className='col border rounded p-3'
      >
        <div>
          <Input name='email' type='email' label='Email' />
        </div>
        <br />
        <div>
          <Input name='password' type='password' label='Password' />
        </div>
        <br />
        <div className='col-auto'>
        <Checkbox name='check' type='checkbox' label='Admin' />
        </div>
        <br />
        <div className='col-auto'>
          <Button type='submit' />
         
        </div>
      </form>
    </div>
  )
}

export default Form
